
//Inclusão de referência para o módulo de funções matemáticas desenvolvido para a atividade 2
var myFunctions = require("./funcoes.js");

var {
    calcularResultadoPorOperacao,
    calcularAdicao,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao
} = require("./funcoes.js");


module.exports = {
    calcularResultadoPorOperacao,
    calcularAdicao,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao
};


/*
try {
//a) 1 + 1
var resultado =  myFunctions.calcularAdicao(1,1);
console.log ("Letra a) =>Resultado Adição =>", resultado);

//b) -123 + 123123
var resultado =  myFunctions.calcularAdicao(-123,123123);
console.log ("Letra b) =>Resultado Adição =>", resultado);

//c) 8 * 0
var resultado =  myFunctions.calcularMultiplicacao(8,0);
console.log ("Letra c) =>Resultado Multiplicação =>", resultado);

//d) 1239123 * 12313
var resultado =  myFunctions.calcularMultiplicacao( 1239123,12313);
console.log ("Letra d) =>Resultado Multiplicação =>", resultado);

//e) 123 / -12
var resultado =  myFunctions.calcularDivisao(123,-12);
console.log ("Letra e) =>Resultado Divisão =>", resultado);

//f) 313123 / 0
var resultado =  myFunctions.calcularDivisao(313123,0);
console.log ("Letra f) =>Resultado Divisão =>", resultado);

//Subtração
resultado = myFunctions.calcularSubtracao(100,30);
console.log("Resultado Subtração: => 100 - 30 =>", resultado);

//calcularResultadoPorOperacao
resultado = myFunctions.calcularResultadoPorOperacao(20,0,"/");
console.log("Resultado quando divisor igual a zero => ", resultado);

//calcularResultadoPorOperacao
resultado = myFunctions.calcularResultadoPorOperacao(20,2,"%");
console.log("Resultado quando operador desconhecido => ", resultado);

}
catch (ex) {
    console.error( ex.message);
}

*/


