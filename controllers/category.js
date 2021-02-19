const Category = require('../models/Category')
exports.categoryController = async (req, res) => {
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