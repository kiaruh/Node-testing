// Cargamos el modulo de HTTP
var http = require("http"),
    fs   = require("fs");

// Creamos un servidor hola mundo
var server = http.createServer(function (req, res) {
    console.log("Hay un pedido por la url", req.url);
    if (req.url === "/") {
        fs.readFile('./public/index.html', function (err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    } else if (req.url === "/img/logo.png") {
        fs.readFile('./public/img/logo.png', function (err, data) {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.end(data);
        });
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("Pagina no encontrada");

    }
});

// Decimos en que puerto queremos escuchar (el 8000)
server.listen(8000);

// Indicamos que vamos a
console.log("Esperando requests en el puerto 8000");
