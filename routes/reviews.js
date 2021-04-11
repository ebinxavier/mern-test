const express = require('express')
const Reviews = require('../controllers/review')
const router = express.Router();

router.post('/review/create', Reviews.createReview)
router.get('/reviews', Reviews.getAllReviews)
router.get('/review/:id', Reviews.getReview)
module.exports = router