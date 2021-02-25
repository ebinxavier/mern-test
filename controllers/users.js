const User = require('../models/User')
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            users
        })

    } catch (error) {
        res.status(500)
    }
}


exports.putUsers = (req, res) => {
    User.findById(req.params.id).then(data => {
        data.role = req.body.role;
        data.username = req.body.username;
        data.email = req.body.email;
        data.save()
        console.log(req.body)
        console.log(req.params.id)
    })
        .then(() => res.json('success'))
        .catch(err => res.status(400).json('Error: ' + err));

}
exports.deleteUsers = (req, res) => {
    User.findByIdAndDelete(req.params.id).then(() => res.json("User has been succesfully deleted!"))
}
