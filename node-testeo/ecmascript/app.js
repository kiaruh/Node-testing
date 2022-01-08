//ES5: var: global 
//ES6+: let: local - const: solo lectura

//Arrow functions: (parametros) => {codigo}
const years = [1990, 1965, 1982, 1937]
let dif = years.map( e => 2022 - e) //[ 32, 57, 40, 85 ]

//CallBack: function(e) {return e} - 'e' seria una funcion - enviar otra funcion como parametro
let greeting = (name, cabllback) => {
    console.log(`Hello ${name}`)
    cabllback()
}
let firstDay = () => {
    console.log('First day of school')
}
greeting('Juan', firstDay)

//setTimeout(() => { console.log('Dps de 2 segundos') }, 2000) //otra funcion con un callback

//Promises: new Promise((resolve, reject) => {codigo}) - estados de la promesa: pending, fulfilled, rejected , settled 
//Promises: .then(function(resultado)) - .catch(function(error)) - .finally(function()) - .all(array de promesas)
const message = new Promise((resolve, reject) => {
    if(false){
        setTimeout(() => {
            resolve('Salio bien')
        }, 2000)
    }else {
        reject('Hubo un error')
    }
    
})

message
    .then(result => {
    console.log(result)
    })
    .catch(error => {
    console.log(error)
    })

//Async/Await: async function(){codigo} - await promesa - .then(function(resultado)) - .catch(function(error))
