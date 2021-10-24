const express = require('express');
const toursController = require('../controllers/tourController')

const router = express.Router();


//====Get tour by slug
router.route('/:slug').get(toursController.getTourBySlug);

module.exports = router;
