const express = require('express')
const data = require('../controllers/users')
const router = express.Router();


router.get('/', data.getUsers)
router.put('/:id', data.putUsers)
router.delete('/:id', data.deleteUsers)
module.exports = router