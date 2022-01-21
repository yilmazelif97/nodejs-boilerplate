const express = require('express');
let router = express.Router();
let userController = require('../../controllers/User')



router.post('/login', userController.login)
router.get('/jwttes', userController.jwtTest)
router.post('/register',userController.register)

module.exports = router;