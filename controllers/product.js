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
            errorrMessage: error
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        //pull data from other models
        const products = await Product.find({}).populate('productCategory', 'category')
        res.status(200).json({
            products,

        })
    } catch (error) {
        console.log(error)
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            successMessage: 'Product has been succesfully deleted'
        })
    } catch (error) {
        console.log(error)
    }

}