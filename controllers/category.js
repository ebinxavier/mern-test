const Category = require('../models/Category')
exports.create = async (req, res) => {
    const { category } = req.body;
    try {
        let newCategory = new Category();
        newCategory.category = category
        newCategory = await newCategory.save()
        res.status(200).json({
            successMessage: `${newCategory.category} was created!`
        })

    } catch (error) {
        res.status(500).json({
            errorrMessage: 'Please try again later'
        })
    }

}

exports.getAll = async (req, res) => {
    try {
        //in order to get all set it as empty object
        const categories = await Category.find({})
        res.status(200).json({
            categories
        })

    } catch (error) {
        res.status(500).json({
            errorrMessage: 'Please try again later'
        })
    }

}