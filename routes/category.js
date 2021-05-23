const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/category')

router.post('/', categoryController.create)
router.get('/', categoryController.getAll)
router.delete('/delete/:id', categoryController.delete)

module.exports = router