
/*Implementação das funções que retornam o resultado da operação matemática 
entre  os 2 números recebidos como entrada e o tipo de o operação informado*/
module.exports = {
    calcularResultadoPorOperacao(n1, n2, operator) {
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
    }   ,
    calcularAdicao(x, y) {
        try{
            return parseFloat(x) + parseFloat(y);
        }
        catch (ex) {
            return ex.message;
        }
    },
    calcularSubtracao(x, y) {
        try{
            return parseFloat(x) - parseFloat(y);
        }
        catch (ex) {
            return ex.message;
        }
    },
    calcularMultiplicacao(x, y) {
        try{
            return parseFloat(x) * parseFloat(y);
        }
        catch (ex) {
            return ex.message;
        }
    },
    calcularDivisao(x, y) {
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
};


