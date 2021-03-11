const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const orders = new mongoose.Schema({
    orderBy: {
        type: String
    },

    productName: {
        type: ObjectId,


        required: true,
        ref: 'Product'
    }
},
    { timestamps: true }
)
const ordersModel = mongoose.model('Orders', orders);
module.exports = ordersModel