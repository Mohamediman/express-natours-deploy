const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({mergeParams: true }); //Setting mergeParams to true will allow this router to have access to params from other Routers

//POST tour/4543534534534/reviews => will create a review for that tour
// GET tour/534534t45gfdfgst5/reviews => will get all the reviews for that tour
// =======> using the nested routes and mergeParams to access the tour ids from the tour route 

router.use(authController.protect);

router
    .route('/')
    .get(reviewController.getAllReviews)
    .post( 
        authController.restrictTo('user'), 
        reviewController.setTourUserIds,
        reviewController.createReview
        );

router
    .route('/:id')
    .get(reviewController.getReview)
    .patch(authController.restrictTo('user', 'admin'), reviewController.updateReview)
    .delete(authController.restrictTo('user', 'admin'), reviewController.deleteReview);


module.exports = router;