const express = require('express')

const router = express.Router();

const categoryController = require('../../controllers/categoryController')

router.get('/',categoryController.GetCategory)
// router.post('/', userController.addUser);
// router.put('/',userController.put)
// router.delete('/',userController.fetchDelete)


// exports.GetCategory = async(req,res)=>{
//     res.send({
//         status:false,
//         message:"geldin"
//     })
// }



module.exports = router;

//kalcak