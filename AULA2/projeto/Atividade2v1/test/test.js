var assert = require('assert');
//Inclusão de referência para o módulo de funções matemáticas desenvolvido para a atividade 2
var myFunctions = require("../funcoes.js")

describe('Suíte de Testes Funções Matemáticas', function() {

  describe('Caso de Teste 1 - Função Somar', function() {
    it('Should return 2 when x=1 and y=1', function() {
        var resultado =  myFunctions.Somar(1,1);

      assert.strictEqual(resultado,2);
    });
  });

  describe('Caso de Teste 2 - Função Subtrair', function() {
    it('Should return 0 when x=1000 and y=1000', function() {
        var resultado =  myFunctions.Subtrair(1000,1000);

      assert.strictEqual(resultado,0);
    });
  });

  describe('Caso de Teste 3 - Função Multiplicar', function() {
    it('Should return 144 when x=12 and y=12', function() {
        var resultado =  myFunctions.Multiplicar(12,12);

      assert.strictEqual(resultado,144);
    });
  });

  describe('Caso de Teste 4 - Função Dividir', function() {
    it('Should return 12 when x=144 and y=12', function() {
        var resultado =  myFunctions.Dividir(144,12);

      assert.strictEqual(resultado,12);
    });
  });

  describe('Caso de Teste 5 - Função Dividir', function() {
    it('Should return Erro when y=0', function() {
        var resultado =  myFunctions.Dividir(144,0);

      assert.strictEqual(resultado,">>>ATENÇÃO: O valor do divisor não pode ser igual a zero!");
    });
  });

  describe('Caso de Teste 6 - Função calcularResultadoPorOperacao', function() {
    it('Should return Erro when operator is not recognized', function() {
        var resultado =  myFunctions.calcularResultadoPorOperacao(1,1,"#");

      assert.strictEqual(resultado,">>>ATENÇÃO: Informe um operador válido: Adição(+), Subtração(-), Multiplicação(*) ou Divisão(/).");

    });
  });

});