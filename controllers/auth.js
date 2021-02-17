const User = require('../models/User')
const bcrypt = require('bcryptjs')

exports.signUpController = async (req, res) => {
    const { username, email, password } = req.body
    console.log(req.body)

    try {
        //Check if email exist
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                errorrMessage: 'Email already exist!'
            })
        }
        const newUser = new User();
        newUser.username = username;
        newUser.email = email;
        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save()
        res.json({
            successMessage: 'Registration success! Please Sign in.'
        })
    }

    catch (error) {
        console.log(error)
        res.status(500).json({
            errorrMessage: 'Server errorr!'
        })
    }
}