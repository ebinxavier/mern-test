const express = require('express');
const router = express.Router();
const Orders = require('../controllers/orders')
router.get('/orders', Orders.getAllOrders)
router.post('/client/order/:id', Orders.createOrder)
router.get('/client/order/:id', Orders.getOrderByUserName)
router.put('/client/cancel/oder/:id', Orders.cancelOrder)
module.exports = router