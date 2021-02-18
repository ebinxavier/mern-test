const { response } = require('express');
const { check, validationResult } = require('express-validator');

exports.signUpValidator = [
    check('username').not().isEmpty().trim().withMessage('Username field is required'),
    // check('email').not().isEmail().normalizeEmail().withMessage('Email must be in correct format'),
    check('email').isEmail().normalizeEmail().withMessage('Email must be in correct format'),

    check('password').isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),

]
exports.validatorResult = (req, res, next) => {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty()
    if (hasErrors) {
        const firstErrorr = result.array()[0].msg;
        return res.status(400).json({
            errorrMessage: firstErrorr
        })
    }
    next();
}

exports.signInValidator = [
    check('email').isEmail().normalizeEmail().withMessage('Email must be in correct format'),

    check('password').isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),

]