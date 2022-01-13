const express = require('express')
const app = express()
const endPoint = require('./routes/api')

app.use(express.json());
app.use('/api',endPoint);

app.listen(3000,()=>{
    console.log('Server is running');
})