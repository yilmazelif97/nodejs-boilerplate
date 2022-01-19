const express = require('express')

const router = express.Router();

const categoryController = require('../../controllers/categoryController')

router.get('/categories',categoryController.GetCategory)
router.get('/category/:id', categoryController.GetCategorybyID )

router.get('deneme/:id.:name', categoryController.deneme )


// router.post('/', userController.addUser);
// router.put('/',userController.put)
// router.delete('/',userController.fetchDelete)




module.exports = router;

//kalcak