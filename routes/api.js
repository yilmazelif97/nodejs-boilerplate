const express = require('express');
let router = express.Router();


const categoryEndpoint = require('../routes/category/category')

const userEndpoint = require('../routes/user/user')

// endpoint yapıları spesifik routerlara yönlendiriyor

router.use('/category', categoryEndpoint)

router.use('/user', userEndpoint)



module.exports = router;








