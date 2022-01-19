const express = require('express');
let router = express.Router();

//const userEndpoint = require('./user/user')

const categoryEndpoint = require('../routes/category/category')

const userEndpoint = require('../routes/user/user')

//router.use('/user', userEndpoint)

router.use('/category', categoryEndpoint)

router.use('/user', userEndpoint)


/*router.use('/category', )
router.use('/posts',)
router.use('/tags')*/

module.exports = router;








