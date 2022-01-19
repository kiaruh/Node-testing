// SO trabajar con el sistema operativa
// FS para trabajar con el sistema de archivos
// EVENTS para trabajar con eventos
// HTTP para trabajar con el protocolo http
// URL para trabajar con las urls
// PATH para trabajar con los directorios

//EJEMPLOS
//objetos globales console, setTimeout, setInterval, clearTimeout, clearInterval
// require('./modulos/datos')
// console.log(global.test)

// const dato = require('./modulos/datos')
// dato.log('hola mundo')
// dato.log(dato.url)

//PATH
// const path = require('path')
// const oPath = path.parse(__filename)
// console.log(oPath)

//OS
// const os = require('os')
// var memoriaLibre = os.freemem()
// var memoriaTotal = os.totalmem()
// console.log('memoria libre: '+memoriaLibre)
// console.log('memoria total: '+memoriaTotal)

//FS
// const fs = require('fs')
// const archivos = fs.readdirSync('./') //syncrono
// console.log(archivos)

// fs.readdir('./', function(err, archivos) {
//     if (err) {
//         console.log('Error: '+err)
//     } else {
//         console.log(archivos)
//     }
// }) //asincrono

//Eventos
// const EventEmitter = require('events')
// const emitter = new EventEmitter()
// emitter.on('hola', (arg) => console.log('Escuchando :' + arg + ' ' + arg.id+ ' ' +arg.url ))
// emitter.emit('hola', {id:1, url:'http://www.google.com'})

//HTTP
const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hola mundo')
        res.end()
    }

    if(req.url === '/api/productos'){
        res.write(JSON.stringify([{id:1, nombre:'producto 1'}, {id:2, nombre:'producto 2'}]))
        res.end()
    }

})
// server.on('connection', (port) => console.log('Nueva conexion: '+ port))
server.listen(3000) //escucha en el puerto 3000