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
        const products = await Product.find({}).populate('productCategory')
        res.status(200).json({
            products,

        })
    } catch (error) {
        console.log(error)
    }
}
exports.getProductById = async (req, res) => {
    const id = req.params.id

    try {
        const product = await Product.findById(id)
        res.status(200).json({ product })

    } catch (error) {

    }
}
exports.updateProduct = async (req, res) => {
    const { productName, productPrice, productDescription, productQty } = req.body
    const id = req.params.id
    try {
        let updatedProduct = await Product.findByIdAndUpdate(id, req.body)
        // updatedProduct.productName = productName
        // updatedProduct.productPrice = productPrice
        // updatedProduct.productDescription = productDescription
        // updatedProduct.productQty = productQty
        res.status(200).json({
            successMessage: `Product has succesfully updated!`,
            updatedProduct
        })
    } catch (error) {

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