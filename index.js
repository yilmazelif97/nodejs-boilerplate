const express = require('express')
const app = express()
const axios = require('axios');

const jwt = require('./helper/jwt');
const errorHandler = require('./helper/errorhandler');

const endPoint = require('./routes/api');


app.use(express.json());
app.use(jwt())

app.use('/api',endPoint);


app.use(errorHandler)
const port = 3000;


app.listen(port,()=>{
    console.log('Server is running');
})




