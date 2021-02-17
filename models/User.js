const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        // 0 is regular user, 1 admin
        type: Number,
        default: 0
    }
},
    //Whenever a instance of user  is created updatedAt property will be created
    { timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User