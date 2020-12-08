/*
Arquitetura de Sistemas Distribuídos - Oferta 13
Arquitetura de Software na Plataforama Node.JS 
Atividade 02
Cintia Saldanha
30/11/2020 
*/

/*Implementação das funções que retornam o resultado da operação matemática 
entre  os 2 números recebidos como entrada e o tipo de o operação informado*/

function calcularResultadoPorOperacao(n1, n2, operator) {
    switch (operator) {
        //Adição
        case "+":
            return n1 + n2;
            break;
        //Subtração
        case "-":
            return n1 - n2;
            break;
        //Multiplicação
        case "*":
            return n1 * n2;
            break;
        //Divisão      
        case "/":
            if (n2==0) {
                return ">>>ATENÇÃO: O valor do divisor não pode ser igual a zero!"
            }
            else return n1 / n2;
            break;
        default:
            return ">>>ATENÇÃO: Informe um operador válido: Adição(+), Subtração(-), Multiplicação(*) ou Divisão(/)."
            break;
    }
};


function Somar(x, y) {
    return x + y;
};

function Subtrair(x, y) {
    return x - y;
};

function Multiplicar(x, y) {
    return x * y;
};

function Dividir(x, y) {
    if (y==0) {
        return ">>>ATENÇÃO: O valor do divisor não pode ser igual a zero!"
    }
    else return x / y;
};

module.exports = {
    Somar,
    Subtrair,
    Multiplicar,
    Dividir,
    calcularResultadoPorOperacao
};


