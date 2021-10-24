const express = require('express');
const toursController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const ReviewRouter = require('./reviews');

const router = express.Router()

//==== Using Nested Routes ====
router
.use('/:tourId/reviews', ReviewRouter);
//====> This means all Routes starts with '/:tourId/reviews' will be redirected to the Review Route


//===Alias Route
router.route('/top-5-cheap').get(toursController.aliasTopTours, toursController.getAllTours);

//====Aggregrate Route
router.route('/tour-stats').get(toursController.getTourStats);


//====Aggregrate Route
router.route('/monthly-plan/:year').get(authController.protect, 
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    toursController.monthlyPlan);

router.route('/tours-within/:distance/center/:latlng/unit/:unit').get(toursController.getToursWithin);
router.route('/distances/:latlng/unit/:unit').get(toursController.getDistances);



router
.route('/')
.get(toursController.getAllTours)
.post(authController.protect, authController.restrictTo('admin', 'lead-guide'), toursController.createTour);

router
.route('/:id')
.get(toursController.getTour)
.patch(authController.protect, 
    authController.restrictTo('admin', 'lead-guide'), 
    toursController.updateTour)
.delete(authController.protect, 
    authController.restrictTo('admin', 'lead-guide'), 
    toursController.deleteTour);



module.exports = router;


