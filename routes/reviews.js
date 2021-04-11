const express = require('express')
const Reviews = require('../controllers/review')
const router = express.Router();

router.post('/review/create', Reviews.createReview)

module.exports = router