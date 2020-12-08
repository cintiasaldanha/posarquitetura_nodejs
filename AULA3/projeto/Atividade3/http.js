//Utilizando o módulo http disponibilizado pelo NodeJS

const http = require('http');

//handler
const requestHandler = function(req,res){
    console.log(req);
    res.writeHead(200);
    res.end("Hello World"); //finaliza e envia o pacote
   
};

const server = http.createServer(requestHandler);
server.listen(3003);

console.log("Executando na porta 3003");