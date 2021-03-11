const Orders = require('../models/Orders');


exports.createOrder = async (req, res) => {
    const { orderBy, categoryName, productName } = req.body
    try {
        let order = new Orders();
        order.orderBy = orderBy
        order.categoryName = categoryName
        order.productName = productName
        order.save()
        res.send(200).json({
            successMessage: 'succes!',
            order
        })
    } catch (error) {

    }
}
exports.getAllOrders = async (req, res) => {
    const order = await Orders.find({}).populate('productName')
    res.status(200).json({
        order
    })
}
