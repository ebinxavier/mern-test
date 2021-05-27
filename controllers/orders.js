const Orders = require('../models/Orders');
const Product = require('../models/Product')

exports.createOrder = async (req, res) => {
    const { orderBy, categoryName, productName, qty, isPurchased } = req.body
    try {
        let order = new Orders();
        order.orderBy = orderBy
        order.categoryName = categoryName
        order.productName = productName;
        order.isPurchased = isPurchased

        await Product.updateOne({ _id: productName }, {
            $inc: {
                productQty: -qty
            }
        })

        await order.save();
        res.status(200).json({
            successMessage: 'succes!',
            order
        })
    } catch (error) {
        console.log(error)
    }
}
exports.getAllOrders = async (req, res) => {
    const order = await Orders.find({}).populate('productName')
    res.status(200).json({
        order
    })
}

exports.getOrderByUserName = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const orders = await Orders.find({ orderBy: id }).populate('users')
        if (orders.length > 0) {

            res.json({ orders })
        }
        else {
            res.status(404).json('Order not found!')
        }
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}