// SO trabajar con el sistema operativa
// FS para trabajar con el sistema de archivos
// EVENTS para trabajar con eventos
// HTTP para trabajar con el protocolo http
// URL para trabajar con las urls
// PATH para trabajar con los directorios

//objetos globales console, setTimeout, setInterval, clearTimeout, clearInterval
// require('./modulos/datos')
// console.log(global.test)

// const dato = require('./modulos/datos')
// dato.log('hola mundo')
// dato.log(dato.url)

// const path = require('path')
// const oPath = path.parse(__filename)
// console.log(oPath)

// const os = require('os')
// var memoriaLibre = os.freemem()
// var memoriaTotal = os.totalmem()
// console.log('memoria libre: '+memoriaLibre)
// console.log('memoria total: '+memoriaTotal)

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

const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('hola', (arg) => console.log('Escuchando :' + arg + ' ' + arg.id+ ' ' +arg.url ))
emitter.emit('hola', {id:1, url:'http://www.google.com'})