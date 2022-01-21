//serie de fibonacci
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
const fs = require('fs')
// let fibo = (n) => { //recursividad
//     if(n <= 2){
//         return 1
//     }
//     return fibo(n-1) + fibo(n-2)
// }
// console.log(fibo(10))

let crearSerie = (n) => {

    return new Promise((resolve, reject) => { 
        let fibo1 = 1
    let fibo2 = 1
    let series = []

    console.log(fibo1)
    for(let i = 2; i < n;i++){
        series.push(fibo1)
        console.log(fibo2)
        fibo2 = fibo1 + fibo2
        fibo1 = fibo2 - fibo1
    }

    fs.writeFile('fibonacci.txt',JSON.stringify(series), (err) => {
        if(err) {
            reject('Error al escribir el archivo')
        }else{
            resolve('Archivo creado')
        }
            
    })

    }

    )}

module.exports = {
    crearSerie
}