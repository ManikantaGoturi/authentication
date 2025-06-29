const express = require('express')
const usermodel = require('../controllers/AuthController');
const router = express.Router()

router.post('/register',usermodel.register)
router.post('/login',usermodel.login)
router.post('/logout',usermodel.logout)

module.exports = router