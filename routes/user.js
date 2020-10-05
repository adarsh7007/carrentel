const express = require('express')
const router = express.Router();
const {
    get,
    signup,
    login
} = require('../controller/user')
router.get('/user', get)
router.post('/signup', signup);
router.post('/login', login);


module.exports = router;