const Review = require('../models/Reviews')
const Products = require('../models/Product')
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

exports.calculateProductReviewAverage = async (req, res, product) => {
    const productAverageReview = await Review.aggregate([
        {
            $match: { product }
        },
        {
            $group: {
                _id: '$product',
                nrRating: { $sum: 1 },
                avgRating: { $avg: '$ratting' },
            },

        },
        {
            $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "_id",
                as: "products"
            }
        }
        // { $unwind: "$productAverageReview" }

    ])

    const favoriteOrder = productAverageReview.filter(data => {
        const { avgRating } = data
        const favorite = avgRating.toFixed() >= 4
        return favorite;
    })


    if (favoriteOrder.length > 0) {

        res.json({ favoriteOrder })
    }
    else {
        res.json('No favorite orders')
    }
}