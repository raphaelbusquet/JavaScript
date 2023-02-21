console.log("-------Pedir Uber-------");

const promessa = new Promise((resolve, reject) => {
  return resolve("O carro chegou!"); //reject('O carro não chegou!') caso queira ver um erro.;

});

console.log("Aguardando...");
promessa
.then((result) => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log("Finalizado"));

