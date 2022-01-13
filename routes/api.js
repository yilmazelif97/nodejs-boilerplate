const express = require('express');
let router = express.Router();

const userEndpoint = require('./user/user')

router.use('/user', userEndpoint)
/*router.use('/category', )
router.use('/posts',)
router.use('/tags')*/

module.exports = router;