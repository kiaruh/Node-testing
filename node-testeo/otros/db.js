var persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: '23',
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso'
    },
    hablar: mensaje => {
        console.log(mensaje)
    }
}

module.exports = persona