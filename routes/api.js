const express = require('express');
let router = express.Router();

//const userEndpoint = require('./user/user')

const categoryEndpoint = require('../routes/category/category')

//router.use('/user', userEndpoint)

router.use('/categories', categoryEndpoint)


/*router.use('/category', )
router.use('/posts',)
router.use('/tags')*/

module.exports = router;








