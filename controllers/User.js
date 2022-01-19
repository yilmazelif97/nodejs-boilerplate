const http = require('http');

const jwt = require('jsonwebtoken')

exports.register =(req,res)=>{
    if(req.body.email==="elif@gmail.com"){
        res.send({
            status:true,
            message:"bu kullanıcı mevcut"
        })
    }else{
        res.send({
            status:false,
            message:"else"
        })
    }
}

exports.login =(req,res)=>{

    if(req.body.email==='elif@gmail.com'&& req.body.password==='elif'){

        const secret ="deneme"
    const user={
        id:2,
        name:'elif',
        email:'elif@gmail.com'
    }
    const token = jwt.sign(
        user,
        secret,
        {expiresIn:'7d'}
    )
    res.send({
        status:true,
        jwt:{
            token:token,
            expiresIn:'7d'
        }, user
    })
    }
    else{
        res.send({
            status:false,
            message:"böyle bir kullanıcı yok"
        })
    }

    
}

exports.jwtTest=(req,res)=>{
    res.send({
        status:true,
        message:"jwt çalıştı"
    })
}


exports.fetchUser = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.addUser = (req,res) => {
    if(req.body.username.length < 4){
        let response = {
            status: false,
            message: 'Username 4 karakterden fazla olmali.'
        }
        res.status(200).send(response)
    }else{
        let response = {
            status: true,
            message: 'İşleminiz gerçekleşti.'
        }
        res.status(200).send(response)
    }
    
}
exports.put = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.fetchDelete = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}