const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const orders = new mongoose.Schema({
    orderBy: {
        type: ObjectId,
        ref: 'users'
    },

    productName: {
        type: ObjectId,


        required: true,
        ref: 'Product'
    },
    isPurchased: {
        type: Boolean,
        required: true,
        default: false,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    shippingAddress: {
        type: "object",
    },
},
    { timestamps: true }
)
const ordersModel = mongoose.model('Orders', orders);
module.exports = ordersModel