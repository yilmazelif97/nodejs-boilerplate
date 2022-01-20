
module.exports = errorHandler

//helper klasörü proje içerisinde hemen hemen her yerde kullanılan yardımcı methodları bir araya toplamak için oluşturuldu. errorhandler index.js in çalıştırılmasıyla herhangi bir hata alındığında ekranda dönmesini sağlıyor. 


function errorHandler(err,req,res,next){
    if(typeof(err)==='string'){
        return res.status(400).json({
            message:err
        })
    }

    if(typeof(err.name)==='UnauthorizedError'){
        return res.status(401).json({
            message:'Invalid token'
        })
    }

    return res.status(500).json({
        message:err.message
    })


}