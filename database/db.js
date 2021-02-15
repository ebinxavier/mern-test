const mongoose = require('mongoose')
const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://user:user123@restaurant-managment.3tysv.mongodb.net/restaurantmanagmentsystem?retryWrites=true&w=majority`, {
            //property to avoid mongoose db erorr    
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('database connect success')
    }
    catch (err) {
        console.log(err)
    }

}

module.exports = connectDb