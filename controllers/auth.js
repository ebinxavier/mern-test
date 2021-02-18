const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret, jwtExpire } = require('../config/keys')
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



exports.signInController = async (req, res) => {
    const { email, password } = req.body
    try {
        //if provided email matches the database
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                errorrMessage: 'Invalid Credentials'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                errorrMessage: 'Invalid Credentials'
            })
        }
        const payload = {
            user: {
                _id: user._id
            }
        }
        jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
            if (err) {
                console.log('jwt errorr', err)
            }
            const { _id, username, email, role } = user
            res.json({
                token,
                user: { _id, username, email, role }
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            errorrMessage: 'Server errorr!'
        })
    }
}