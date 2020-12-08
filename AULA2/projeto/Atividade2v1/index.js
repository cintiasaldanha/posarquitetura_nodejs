
//Inclusão de referência para o módulo de funções matemáticas desenvolvido para a atividade 2
var myFunctions = require("./funcoes.js")

try {
//a) 1 + 1
var resultado =  myFunctions.Somar(1,1);
console.log ("Letra a) =>Resultado Adição =>", resultado);

//b) -123 + 123123
var resultado =  myFunctions.Somar(-123,123123);
console.log ("Letra b) =>Resultado Adição =>", resultado);

//c) 8 * 0
var resultado =  myFunctions.Multiplicar(8,0);
console.log ("Letra c) =>Resultado Multiplicação =>", resultado);

//d) 1239123 * 12313
var resultado =  myFunctions.Multiplicar( 1239123,12313);
console.log ("Letra d) =>Resultado Multiplicação =>", resultado);

//e) 123 / -12
var resultado =  myFunctions.Dividir(123,-12);
console.log ("Letra e) =>Resultado Divisão =>", resultado);

//f) 313123 / 0
var resultado =  myFunctions.Dividir(313123,0);
console.log ("Letra f) =>Resultado Divisão =>", resultado);

//Subtração
resultado = myFunctions.Subtrair(100,30);
console.log("Resultado Subtração: => 100 - 30 =>", resultado);
}
catch (ex) {
    console.error( ex.message);
}





