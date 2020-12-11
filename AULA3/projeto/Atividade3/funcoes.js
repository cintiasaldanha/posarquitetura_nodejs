
/*Implementação das funções que retornam o resultado da operação matemática 
entre  os 2 números recebidos como entrada e o tipo de o operação informado*/
function calcularResultadoPorOperacao(n1, n2, operator) {
    try{
        switch (String(operator)) {
            //Adição
            case "+":
            case " ":
                return parseFloat(n1) + parseFloat(n2);
                break;
            //Subtração
            case "-":
                return parseFloat(n1) - parseFloat(n2);
                break;
            //Multiplicação
            case "*":
                return parseFloat(n1) * parseFloat(n2);
                break;
            //Divisão      
            case "/":
                if (parseInt(n2)==0) {
                    return ">>>ATENÇÃO: O valor do divisor não pode ser igual a zero!"
                }
                else return parseFloat(n1) / parseFloat(n2);
                break;
            default:
                return ">>>ATENÇÃO: Informe um operador válido: Adição(+), Subtração(-), Multiplicação(*) ou Divisão(/)."
                break;
            }
        }
        catch (ex) {
            return ex.message;
        }
    };
    
function calcularAdicao(x, y) {
   try{
        return parseFloat(x) + parseFloat(y);
    }
    catch (ex) {
        return ex.message;
    }
};

function calcularSubtracao(x, y) {
    try{
        return parseFloat(x) - parseFloat(y);
    }
    catch (ex) {
        return ex.message;
    }
};

function calcularMultiplicacao(x, y) {
    try{
       return parseFloat(x) * parseFloat(y);
    }
    catch (ex) {
       return ex.message;
    }
};

function calcularDivisao(x, y) {
    try{
        if (parseInt(y)==0) {
                return ">>>ATENÇÃO: O valor do divisor não pode ser igual a zero!"
        }
            else return parseFloat(x) / parseFloat(y);
    }
    catch (ex) {
       return ex.message;
    }
}

module.exports = {
    calcularResultadoPorOperacao: calcularResultadoPorOperacao,
    calcularAdicao: calcularAdicao,
    calcularSubtracao: calcularSubtracao,
    calcularMultiplicacao: calcularMultiplicacao,
    calcularDivisao: calcularDivisao
};