const serie = require('./series')

let argv = process.argv
let valor = argv[2]
let cantidad = parseInt(valor)

serie.crearSerie(cantidad)
.then(mensaje => console.log(mensaje))
.catch(err => console.log(err))