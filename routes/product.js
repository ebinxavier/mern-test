const express = require('express')
const router = express.Router();
const upload = require('../middlewares/multer')
const productController = require('../controllers/product')
router.post('/', upload.single('productImage'), productController.create)
router.get('/', productController.getAll)
module.exports = router