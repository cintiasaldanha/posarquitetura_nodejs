/*
Arquitetura de Sistemas Distribuídos - Oferta 13
Arquitetura de Software na Plataforama Node.JS 
Atividade 01
Cintia Saldanha 
*/


/*Implementação do método que retorna o resultado da operação matemática 
entre  os 2 números recebidos como entrada e o tipo de o operação informado*/

const f = (n1, n2, operator) => {
    switch (operator) {
        case "+":
            return n1 + n2;
            break;
        case "-":
            return n1 - n2;
            break;
        case "*":
              return n1 * n2;
              break;
        default:
            break;
    }
};

//Execucão síncrona
const r1 = f(2,5, "+");
const r2 = f(2,5, "-");
const r3 = f(2,5, "*");
console.log ("Execução síncrona: ", "Adição: ",r1, " | Subtração: ", r2, " | Multiplicação: ", r3);

/*Implementação assíncrona, com delay de retorno da execução parametrizado 
para facilitar visualização da execução assíncrona*/
async function returnFAssincrona(n1, n2, operator, delay){
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(f(n1,n2,operator));
        }, delay);   //delay: tempo em milissegundos que será aguardado para retorno do resultado da operação
      });
}

//Chamada do método assíncrono:
try {

      returnFAssincrona(2,5, "+",10000).then(a => {
          console.log("Execução assíncrona Adição: ", a);  // exibe resultado depois de 10 segundos.
      });
  
      returnFAssincrona(2,5, "-",5000).then(b => {
          console.log("Execução assíncrona Subtração: ",b);  // exibe resultado depois de 5 segundos.
      });

      returnFAssincrona(2,5, "*",2000).then(c => {
        console.log("Execução assíncrona Multiplicação: ", c);  // exibe resultado depois de 2 segundos.
      });

}
catch(err){}


