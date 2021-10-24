const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Email = require('./../utils/email');
// const sendMail = require('./../utils/email');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const createAndSendToken = (user, status, res) => {
    const token = signToken(user._id);

    const cookieOptions =  {
        expires: new Date( 
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            ),
        httpOnly: false
    };

    if(process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);

    //=====Remove password from the output
    user.password = undefined;

    res.status(status).json({
        status: 'Success',
        token: token,
        data: {
            user
        }
    })
}

//==== Sign up a new User ===
exports.signup = catchAsync(async(req, res, next) => {
    //===> passing the de-estructured object instead of req.body will prevent some users 
    //==== registering as admin or assigning themselves to a role that is not meant to be public
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        passwordChangedAt: req.body.passwordChangedAt,
        role: req.body.role,
        photo: req.body.photo
    });

    //===Send Welcome Email
    const url = `http://localhost:5000/me`;
    await new Email(newUser, url).sendWelcome();

    //===Create token to login the user
    createAndSendToken(newUser, 201, res);
});

exports.login = catchAsync(async(req, res, next) => {
    const { email, password } = req.body;
    //=== Check if the inputs contains email and password
    if(!email || !password){
        return next(new AppError('Both the email and password are required', 404));
    }

    //==== check if the user exists and the password is correct
    const user = await User.findOne({email}).select('+password');

    if(!user || !(await user.correctPassword(password, user.password))){
        return next(new AppError('Invalid Email or Password', 401));
    } 
    //===if everything is ok,  login the user and send the token
    createAndSendToken(user, 200, res);
});

exports.protect = catchAsync(async(req, res, next) => {
    // console.log("req.cookies from protect:", req.cookies)
    //==1:) Check if there is token in the header
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      token = req.headers.authorization.split(' ')[1]
    } else if(req.cookies.jwt){
        token = req.cookies.jwt
    }else {
        console.log("No token from either way:")
        return next( new AppError('You not Authorized to access this route', 401))
    }

    //==2:) Check if there is token is Valid => Token Verification
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
    //==3:) Check if the user still exist
    const currentUser = await User.findById(decoded.id);

    if(!currentUser) {
        return next(new AppError('the User belonging to this Token no longer exist', 401));
    }
    //==4:) Check if the token was changed after it was issued.
    if(currentUser.changedPasswordAt(decoded.iat)){
        return next(new AppError('User recently changed the password.Please login again', 401));
    };

    ///===Give access to the protected Route
    req.user = currentUser;

    next();
})

//===== check if the user is logged in
exports.isLoggedIn = catchAsync(async(req, res, next) => {
    console.log("isLoggedin Called here..")
     if(req.cookies.jwt){
         //==1:) Check if there is token is Valid => Token Verification
         const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
         //==2:) Check if the user still exist
         const currentUser = await User.findById(decoded.id);
     
         if(!currentUser) {
             console.log("The user is not loged in");
             return next();
         }
         //==3:) Check if the token was changed after it was issued.
         if(currentUser.changedPasswordAt(decoded.iat)){
             return next();
         };
         //=====THERE IS A LOGED IN USER => SET THE LOCAL VARIABLE USER 
         console.log("The user is loged in");
         res.locals.loggedIn = currentUser

         res.status(200).json({
             status: 'success',
             loggedIn: currentUser
         })

        } else {
            res.status(200).json({
                status: 'success',
                loggedIn: null
            })
        }
        
    // next();
})

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        //==== check if the user is an admin or lead-guide
        if(!roles.includes(req.user.role)){
            return next( new AppError(`You are not authorize for this action`, 403));
        }

        next();
    }
}

exports.forgotPassword = catchAsync(async(req, res, next) => {
    //1: ====Get the email from the user input and find if the user that email exists
    const user = await User.findOne( {email: req.body.email });

    if(!user){
        return next( new AppError("No User for that email..", 404));
    }

    //2: ===Generate random resetToken
    const resetToken = user.createPasswordResetToken();

    //==== To save the passwordResetToken and passwordResetExpires into the DB
            //==> Extremely helpful to add the ValidateBeforeSave to prevent the validation running
    await user.save({ validateBeforeSave: false });
    
    //==== We do try and catch here because we want to remove the passwordResetExpires and passwordResetToken from the DB
    // const message = `Forgot Your password? Sumbit a Patch request to change your Password to the ${resetUrl}.  \n If you didn't forget your password, Please ignore this email.`

    try {
        //3: === Generate the url & Send Password Reset Email
        const resetUrl = `${req.protocol}://localhost:3000/api/v1/users/resetPassword/${resetToken}`;
    
        await new Email(user, resetUrl).sendPasswordReset();
    
        res.status(200).json({
            status: 'success',
            message: "Token sent to the user's Email"
        })
        
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });

        return next( new AppError("There was an error sending the email. Please try agin later", 500));
    }
    
});

exports.resetPassword = catchAsync(async(req, res, next) => {
    //1: Get the user based on the token
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({passwordResetToken: hashedToken, passwordResetExpires: {$gt: Date.now() } })

    //2: If the token has not expired and the user exist, set the password
    if(!user) {
        return next(new AppError("Invalid Token or the Token has expired", 400));
    }

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    //3: update the changePasswordAt property for the User in the DB
        //==> Middleware will take care of 

    //4: Login the user and sent JWT
    createAndSendToken(user, 201, res);

});


exports.updatePassword = catchAsync(async(req, res, next) => {
    //1: Get the user from the collection
        const user = await User.findById(req.user.id).select("+password");  //===> Getting from the collection

    //2: Check if POSTED password is correct
    const InputOldPassword = req.body.oldPassword;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    console.log("req.body:", req.body);

    if(!InputOldPassword || !password || !confirmPassword){
        return next(new AppError('The old Password, the new Password and  Confirmpassword are all required..', 401));
    }


    if(!(await user.correctPassword(InputOldPassword, user.password))){
        return next(new AppError('Invalid Password. Please Enter the correct Password', 401));
    } 

    //3: if so, Update the password
    user.password = password;
    user.confirmPassword = confirmPassword;

    await user.save();

    //4: Log the user in, send JWT
    createAndSendToken(user, 201, res);

})