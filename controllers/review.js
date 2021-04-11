const Review = require('../models/Reviews')

exports.createReview = async (req, res) => {
    const { reviewedBy, comment, review, ratting, product } = req.body;
    try {
        const createdReview = new Review({
            reviewedBy, review, comment, ratting, product
        })
        await createdReview.save();
        res.status(200).json({
            createdReview
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})
        if (reviews.length > 0) {
            res.json({ reviews })

        }
        else {
            res.status(404).json({ errorr: 'Reviews not found!' })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
}
exports.getReview = async (req, res) => {
    const id = req.params.id;
    try {
        const review = await Review.findById(id)
        res.json({ review })
    } catch (error) {
        res.status(500).json({ error })
    }
}