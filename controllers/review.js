const Review = require('../models/Reviews')

exports.createReview = async (req, res) => {
    const { reviewedBy, review, comment, ratting, product } = req.body;
    try {
        const review = new Review({
            reviewedBy, review, comment, ratting, product
        })
        await review.save();
        res.status(200).json({
            review
        })
    } catch (error) {
        res.status(500).json({ error })
    }
}