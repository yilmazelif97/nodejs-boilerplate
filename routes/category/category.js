const express = require('express')

const router = express.Router();

const categoryController = require('../../controllers/categoryController')

//router klasörü farklı modeller için controllera yönlendirme yapılması adına oluşturuldu.
//category için aşağıdaki routerlar oluşturuldu. url kısmına /.. yazıldıktan sonra kendisine atanan kontrollerı ve fonksiyonunu çalıştırıyor. 


//tüm kategorileri çekmek için kullanılan router
router.get('/categories',categoryController.GetCategory)

//belirli bir id yi çekmek için kullanılan router
router.get('/category/:id', categoryController.GetCategorybyID )

//router.get('deneme/:id.:name', categoryController.deneme )


// router.post('/', userController.addUser);
// router.put('/',userController.put)
// router.delete('/',userController.fetchDelete)



//routerların export edilmesiyle bu sayfa dışında projenin başka yerlerinde routerın kullanılması sağlandı. Eğer bu export yapılmasaydı index sayfasından bağlayan cycle buraya kadar ilerleyemezdi

module.exports = router;

//kalcak