
//var myFunctions = require("./funcoes.js");

var myFunctions = require("math-asd-of13");

const express = require('express');
const app = express()
const port = 3003


//Get - utilizando parâmetros informados via querystring
app.get('/calcularResultadoPorOperacao', (req, res) => {
    try {
        console.log(req.query.x, req.query.y, req.query.operador);
            
        var resultado = 
        myFunctions.calcularResultadoPorOperacao(parseFloat(req.query.x),parseFloat(req.query.y),String(req.query.operador));

        res.send("O resultado da operação é : " + resultado);
    
    }
    catch (ex) {
        console.error( ex.message);
        res.status(400).send(ex.message);
    }
});

//Post - utilizando padrão para rotas dinâmicas
app.post('/calcularResultadoPorOperacao/:x/:y/:operador', (req, res) => {
    try {
        console.log(req.params.y, req.params.x, req.params.operador);
    
        var resultado = 
        myFunctions.calcularResultadoPorOperacao(parseFloat(req.params.x),parseFloat(req.params.y),String(req.params.operador));

        res.send("O resultado da operação é : " + resultado);
    
    }
    catch (ex) {
        console.error( ex.message);
        res.status(400).send(ex.message);
    }
});

//Get - utilizando parâmetros informados via querystring
app.get('/somar', (req, res) => {
    try {
        console.log(req.query.x, req.query.y);
    
        var resultado = 
        myFunctions.calcularAdicao(parseFloat(req.query.x),parseFloat(req.query.y));

        res.send("O resultado da Adição é : " + resultado);
    
    }
    catch (ex) {
        console.error( ex.message);
        res.status(400).send(ex.message);
    }
});

//Post - utilizando padrão para rotas dinâmicas
app.post('/subtrair/:x/:y', (req, res) => {
    try {
        console.log(req.params);
    
        var resultado = 
        myFunctions.calcularSubtracao(parseFloat(req.params.x),parseFloat(req.params.y));

        res.send("O resultado da Subtração é : " + resultado);
    
    }
    catch (ex) {
        console.error( ex.message);
        res.status(400).send(ex.message);
    }
});

//Get - utilizando parâmetros informados via querystring
app.get('/multiplicar', (req, res) => {
    try {
        console.log(req.query.x, req.query.y);
    
        var resultado = 
        myFunctions.calcularMultiplicacao(parseFloat(req.query.x),parseFloat(req.query.y));

        res.send("O resultado da Multiplicação é : " + resultado);
    
    }
    catch (ex) {
        console.error( ex.message);
        res.status(400).send(ex.message);
    }
});

//Post - utilizando padrão para rotas dinâmicas
app.post('/dividir/:x/:y', (req, res) => {
    try {
        console.log(req.params);
    
        var resultado = 
        myFunctions.calcularDivisao(parseFloat(req.params.x),parseFloat(req.params.y));

        res.send("O resultado da Divisão é : " + resultado);
    
    }
    catch (ex) {
        console.error( ex.message);
        res.status(400).send(ex.message);
    }
});

/*Para Teste básico
const result = myFunctions.calcularResultadoPorOperacao(6,7,"+");
console.log(result);
*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })