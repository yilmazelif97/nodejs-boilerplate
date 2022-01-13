const express = require('express');
let router = express.Router();
let userController = require('../../controllers/User')

router.get('/', userController.fetchUser);
router.post('/', userController.addUser);
router.put('/',userController.put)
router.delete('/',userController.fetchDelete)

module.exports = router;