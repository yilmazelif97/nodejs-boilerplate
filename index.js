const express = require('express')
const app = express()
const axios = require('axios');

const endPoint = require('./routes/api')

app.use(express.json());
app.use('/api',endPoint);

const port = 3000;


app.listen(port,()=>{
    console.log('Server is running');
})




