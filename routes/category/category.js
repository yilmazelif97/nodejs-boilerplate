const express = require('express')

const router = express.Router();

const categoryController = require('../../controllers/categoryController')

const tokenget = require('../../helper/errorhandler')




//tokenget fonksiyonu ile üretilen tokenın doğruluğu kontrol edildi eğer token eşleşmesi sağlanmazsa get istekleri çalışmıyor.

//belirli bir id yi çekmek için kullanılan router
router.route('/category/:id').get(tokenget, categoryController.GetCategorybyID )

//tüm kategorileri çekmek için kullanılan router
router.route('/categories').get(tokenget ,categoryController.GetCategory )



module.exports = router;

