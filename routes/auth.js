const express = require('express')
const router = express.Router();
const { signUpValidator, validatorResult } = require('../middlewares/validator')
const { signUpController } = require('../controllers/auth')
router.post('/signup', signUpValidator, validatorResult, signUpController)
module.exports = router