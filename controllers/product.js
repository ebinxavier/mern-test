const Product = require('../models/Product')
exports.create = async (req, res) => {
    const { filename } = req.file;
    const { productName, productDescription, productPrice, productCategory, productQty } = req.body
    console.log(req.file, 'req fil')
    try {
        let product = new Product();
        product.fileName = filename
        product.productName = productName
        product.productDescription = productDescription
        product.productPrice = productPrice
        product.productCategory = productCategory
        product.productQty = productQty
        console.log(product)
        await product.save()
        res.status(200).json({
            successMessage: `${productName} was succesfully created !`,
            product
        })

    } catch (error) {
        res.status(500).json({
            errorrMessage: 'productController.create error'
        })
    }
}