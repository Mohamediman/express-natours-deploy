const AppError = require('./../utils/appError');

/*====== START OF THE THREE MONGODB OPERATIONAL ERRORS=======*/
const handleCastErrorDB = err => {  //==> INVALID ID THAT CAN'T BE FOUND
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
    //==> DUPLICATE FIELDS IE TRYING TO USE AN EMAIL THAT IS ALREADY REGISTERED
    const value = err.message.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    const resp = `Duplicate Value for: ${value}. Please use another value`;
    return new AppError(resp, 400);
}

const handleDValidationErrorDB = err => {
    //==> MONGOOSE/MONGODB VALIDATION ERRORS. IE REQUIRED PASSWORD, MIN LENGTH OF NAME ETC
    const errors = Object.values(err.errors).map(val => val.message);
    const message = `Invalid Error. ${errors.join('. ')}`;

    return new AppError(message, 400);
}
/*====== END OF THE THREE MONGODB OPERATIONAL ERRORS=======*/

/*====== JWT ERRORS ERRORS=======*/
            //==>when the Token is wrong
const handleJwtError = err => new AppError('Invalid token, Please log in again', 401);

        //==> When the token already has expired 
const handleJwtExpiredError = err => new AppError('Your token has expired, Please log in again', 401);
/*====== END OF JWT ERRORS ERRORS=======*/


const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
};

const sendErrorProd = (err, res) => {
    //====Operational Error
    if(err.isOperational){
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
        
        //====Programming or Other Unknown Error: Do not Leak Error Details
    } else {
        //===Log the Error to the console so that we know where the error is coming from
        console.error("Error from Unknown Area:)", err);
        res.status(500).json({
            status: 'error',
            message: 'Something Went Wrong. Please Try Again.'
        });
    }
}


//===== Error Handling Middleware =====
module.exports = (err, req, res, next) =>{
    // console.log(err.stack);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if(process.env.NODE_ENV === 'development'){
        sendErrorDev(err, res);
    
    } else if(process.env.NODE_ENV === 'production') {
        // let error = { ...err };
        let error = Object.assign(err)

        //===> Turning Wierd MongoDB into an Operational Error 
        if(error.name === 'CastError') error = handleCastErrorDB(error)
        if(error.code === 11000) error = handleDuplicateFieldsDB(error)
        if(error.name === 'ValidationError') error = handleDValidationErrorDB(error)
        if(error.name === 'JsonWebTokenError') error = handleJwtError(error)
        if(error.name === 'TokenExpiredError') error = handleJwtExpiredError(error)

        sendErrorProd(error, res);
    }
}