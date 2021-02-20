const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const ProductSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 60
    },
    productDescription: {
        type: String,
        trim: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productCategory: {
        type: ObjectId,
        //model to reference, to get the id from
        ref: 'Category',
        required: true
    },
    productQty: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    })
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product