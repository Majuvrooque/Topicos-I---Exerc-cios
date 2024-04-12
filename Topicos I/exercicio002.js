var http = require("http");

var info = require('./dadosalunos');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Nome do Aluno: "+ info.FirstName + " Sobrenome: " + info.LastName + "RGM: " + info.RGM);
    res.end();
}).listen(8093, ()=> {
    console.log('Se dar certo, aparece');
});

exports.FirstName = "Maria Julia";
exports.LastName = "Vieira";
exports.RGM = "1234567";