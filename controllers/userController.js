const multer = require('multer')
const sharp = require('sharp')
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

const factory = require('./handlerfactory');


// const multerStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/img/users');
//     },
//     filename: (req, file, cb) => {
//         //=== give each image upload a unique name 
//         //=== user-id-timestamp.jpeg(extension)
//         const ext = file.mimetype.split('/')[1];
//         cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//     }
// });

//===Store the uploaded photo in the memory so that we can resize before saving into the DB
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    } else {
        cb(new AppError('Not an image! Pleae upload only an image', 400), false)
    }
};

const upload = multer({ 
    storage: multerStorage,
    fileFilter: multerFilter
})

//==== Upload the photo
exports.uploadUserPhoto =  upload.single('photo');

//=== Resize the photo
exports.resizeUserPhoto = (req, res, next) => {
    if(!req.file) return next();

    req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
    sharp(req.file.buffer)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`client/public/img/users/${req.file.filename}`);

    next();
};

//=== allow the user to get his/her profile
exports.getMe = (req, res, next) => {
    req.params.id = req.user.id;
    next();
}


const filteredObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if(allowedFields.includes(el)) {
            //newObj[el] = obj.el; ???why doesnt work????
            newObj[el] = obj[el];
        }
      }
     )
     return newObj;
};



exports.updateMe = catchAsync(async(req, res, next) => {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);
    
    if(req.body.password || req.body.confirmPassword) {
        return next(new AppError(`Can't update your password in this route. Please use the updatePassword route`, 403));
    }

    const filteredData = filteredObj(req.body, 'name', 'email');
    if(req.file) filteredData.photo = req.file.filename;
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredData, {
        new: true, 
        runValidators: true
    });
    res.status(200).json({
        status: 'Success',
        data: {
            user: updatedUser
        }
    })
})


exports.deleteMe = catchAsync(async(req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, {active: false});
    
    res.status(204).json({
        status:'Success',
        data: null
    })
});


exports.getAllUsers = factory.getAll(User)
exports.getUser = factory.getOne(User);
exports.updateUser = factory.createOne(User);
exports.deleteUser = factory.deleteOne(User);