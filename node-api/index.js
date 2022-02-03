const express = require('express')
const joi = require('joi')
const app = express()

const users = [{id:1 ,name: 'John'}, {id:2 ,name: 'Sara'}, {id:3 ,name: 'Karen'}]

//middleware
app.use(express.json()) //midelware to parse json

//metodos get post put delete
app.get('/', (req, res) => { 
    res.send('Hello World')
})

app.get('/api/users',(req, res) => {
res.send(users)
})

// app.get('/api/products/:category/:name', (req, res) => {
//     res.send(req.params)}) //http://localhost:3000/api/products/books/nodejs
// app.get('/api/users/:id', (req, res) => {
//     res.send(req.query)}) //http://localhost:3000/api/users/1?sexo=M

app.get('/api/users/:id',(req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id))
    if(!user) return res.status(404).send('User not found')
    res.send(user)
})

app.post('/api/users',(req, res) => {

    const schema = joi.object({
        name: joi.string().min(3).required()
    })

    const {error,value} = schema.validate({name: req.body.name})
    if(!error){
        let user = {
            id: users.length + 1,
            name: value.name
        }
        users.push(user)
        res.send(user)
    }else{
        res.status(400).send(error.details[0].message)
    }
    // if(!req.body.name || req.body.name.length < 3) //validacion
    // return res.status(400).send('Name is required and should be 3 characters long')
})

app.put('/api/users/:id',(req, res) => {
    // let user = users.find(u => u.id === parseInt(req.params.id))
    let user = validateUser(req.params.id)
    if(!user){
        res.status(404).send('User not found')
        return 
    } 

    const schema = joi.object({
        name: joi.string().min(3).required()
    })

    const {error,value} = schema.validate({name: req.body.name})
    if(error){ 
        res.status(400).send(error.details[0].message)
        return
    }
    user.name = value.name
    res.send(user)

})

//escucha el puerto con una variable de entorno
const port = process.env.PORT || 3000
app.listen(port,()=>{   
    console.log(`server on port http://localhost:${port}`)
})



function validateUser(id){
    return users.find(u => u.id === parseInt(id))
}