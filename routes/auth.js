const express = require('express')
const router = express.Router();
const { signUpValidator, validatorResult } = require('../middlewares/validator')
router.post('/signup', signUpValidator, validatorResult)
module.exports = router