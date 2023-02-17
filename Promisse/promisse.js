console.log("-------Pedir Uber-------");

const promessa = new Promise((resolve, reject) => {
  return resolve("O carro chegou!");
});

console.log("Aguardando...");
promessa.then((result) => console.log(result));
