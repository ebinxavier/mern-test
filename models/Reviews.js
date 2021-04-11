const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const reviewSchema = new mongoose.Schema({
    reviewedBy: {
        type: ObjectId,
        ref: 'users',
        required: [true, 'Review must belong to a user!']

    },

    review: {
        type: String
    },
    comment: {
        type: String
    },
    ratting: {
        type: Number,
        min: 1,
        max: 5
    },
    product: {
        type: ObjectId,
        ref: 'products',
        required: [true, 'Review must belong to a product!']
    }
},
    { timestamps: true },
    //if a field is not stored in db but calculated using ohter values
    {
        toJson: { virtuals: true },
        toObject: { virtuals: true }
    }
)

const Review = mongoose.model('reviews', reviewSchema)
module.exports = Review