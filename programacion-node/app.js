const serie = require('./series')

serie.crearSerie(50)
.then(mensaje => console.log(mensaje))
.catch(err => console.log(err))