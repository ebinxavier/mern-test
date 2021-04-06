const Orders = require('../models/Orders');
const Product = require('../models/Product')

exports.createOrder = async (req, res) => {
    const { orderBy, categoryName, productName, qty } = req.body
    try {
        let order = new Orders();
        order.orderBy = orderBy
        order.categoryName = categoryName
        order.productName = productName;

        await Product.updateOne({ _id: productName }, {
            $inc: {
                productQty: -qty
            }
        })

        await order.save();
        res.send(200).json({
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
