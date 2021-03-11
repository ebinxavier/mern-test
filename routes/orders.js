const express = require('express');
const router = express.Router();
const Orders = require('../controllers/orders')
router.get('/orders', Orders.getAllOrders)
router.post('/order', Orders.createOrder)

module.exports = router