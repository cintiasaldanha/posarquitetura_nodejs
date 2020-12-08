
//Promise
/*
async function returnMyNameAfterXSecondsAsync(x){
    new Promise((resolve, reject) => {
        return setTimeout(() =>resolve("Cintia"), x * 1000);
    });
}

//const name = returnMyNameAfterXSecondsAsync(2);

const name = returnMyNameAfterXSecondsAsync(2)
//    .then() =>{}
//    .catch(() => {});
*/

//async/await  é a mesma coisa de trabalhar explicitamente com Promise



async function returnMyNameAfterXSecondsAsync(x){
      return setTimeout(() =>resolve("Cintia"), x * 1000);
  }

try {
    await returnMyNameAfterXSecondsAsync();
}
catch(err){}


/*

async function returnResultadoAssincrono(n1, n2, operator){
    switch (operator) {
        case "+":
            return setTimeout(() =>resolve(n1 + n2), 2000);
            break;
        case "-":
            return setTimeout(() =>resolve(n1 - n2), 2000);
            break;
        default:
            break;
    }
   
}

try {
  await returnResultadoAssincrono(2,5, "+");

  const r1 =  await returnResultadoAssincrono(2,5, "+");

  const r2 = f(2,5, "-");
  console.log (r1, r2);

}
catch(err){}

*/