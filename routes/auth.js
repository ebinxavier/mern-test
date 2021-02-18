const express = require('express')
const router = express.Router();
const { signUpValidator, signInValidator, validatorResult } = require('../middlewares/validator')
const { signUpController, signInController } = require('../controllers/auth')
router.post('/signup', signUpValidator, validatorResult, signUpController)
router.post('/login', signInValidator, validatorResult, signInController)

module.exports = router