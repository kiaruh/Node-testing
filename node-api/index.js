const express = require('express')
const app = express()

//metodos get post put delete
app.get('/', (req, res) => { 
    res.send('Hello World')
})
app.get('/api/usuarios',(req, res) => {
res.send([{id:1, nanme:'jonh'},{id:2, name:'jane'}])
})

//escucha el puerto
app.listen(3000,()=>{   
    console.log('Server on port 3000')
})