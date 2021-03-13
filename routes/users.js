const express = require('express')
const data = require('../controllers/users')
const router = express.Router();


router.get('/', data.getUsers)
router.put('/:id', data.putUsers)
router.delete('/:id', data.deleteUsers)
router.get('/search', data.searchUsers)
module.exports = router