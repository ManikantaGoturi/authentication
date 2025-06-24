const express = require('express')
const usermodel = require('../controllers/AuthController');
const router = express.Router()

router.post('/register',usermodel.register)

module.exports = router