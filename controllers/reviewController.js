const Review = require("../models/reviewModel");
const factory = require('./handlerfactory');

// const AppError = require('../utils/appError');
// const catchAsync = require("../utils/catchAsync");


exports.setTourUserIds = (req, res, next) => {
    if(!req.body.user){
        req.body.user = req.user.id;
    }
    if(!req.body.tour) {
        req.body.tour = req.params.tourId;
    }
    
    next();
}

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.createReview = factory.createOne(Review);