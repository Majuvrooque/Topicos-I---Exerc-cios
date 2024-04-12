var http = require('http');

http.createServer(function (req, res) {
    var AcionaRecursos = " modulo de catalogo - Acionado - ";
    var AcionaRecursos2 = " modulo de vendas - Acionado - ";
    var AcionaRecursos3 = " modulo de reserva - Acionado - ";
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(AcionaRecursos);
    res.write(AcionaRecursos2);
    res.write(AcionaRecursos3);
    res.end(' SISTEMAS DE AGENCIA AEREA ');
}).listen(8083, ()=> {
    console.log('Sistema de Passagens Aereas');
});

//Chamando serviço de pagamento
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Status: proc. de pagamento" );
    res.end();
}).listen(8084);

//Chamando serviço de milhagens
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Status: servico de milhas" );
    res.end();
}).listen(8085);