const express = require('express')
const Reviews = require('../controllers/review')
const router = express.Router();

router.post('/review/create', Reviews.createReview)
router.get('/reviews', Reviews.getAllReviews)
router.get('/review/:id', Reviews.getReview)
router.get('/reviews/average', Reviews.calculateProductReviewAverage)
module.exports = router