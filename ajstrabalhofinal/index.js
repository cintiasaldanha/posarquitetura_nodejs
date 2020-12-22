const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const myFunctions = require("math-asd-of13");

const app = express();

app.use("/", express.static("./site"));

//Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app);

//Inicializa um instancia de servidor websocket a partir do servidor http
const wss = new WebSocket.Server({ server });

// Função responsável por manusear a conexão websocket
wss.on("connection", (ws) => {
  // Função que trata as mensagens recebidas pelo servidor
  ws.on("message", (message) => {
    console.log("Mensagem recebida: ", message);

    let separadores = ['+', '-', '/','*'];
    let operandos = message.split(new RegExp('(['+ separadores.join('') + '])')).map(function(i){
    return i.trim();
    });

    console.log(operandos);

    var resultado = myFunctions.calcularResultadoPorOperacao(operandos[0],operandos[2],operandos[1]);

    ws.send("O resultado da operação: " + message + " é : " + resultado);
    
  });
});

//Inicia o servidor
server.listen(process.env.PORT || 9898, () => {
  console.log("Servidor conectado na porta:", server.address().port);
});
