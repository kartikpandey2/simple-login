const express = require('express')
const router = express.Router()
const controller = require('../controller')
const errorHandler = require('../controller/errorhandling')

router.get('/isvalidemail', controller.isvalidemail)

router.post('/signup', controller.signup)

router.post('/login', controller.login)

module.exports = router