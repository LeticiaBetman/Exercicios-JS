//Exercício 1 (Lista 01 - Laço de repetição FOR)
const readline = require('readline-sync');

let inicio = Number(readline.question("Digite o primeiro numero do intervalo: "));
let fim = Number(readline.question("Digite o ultimo numero do intervalo: "));

if (inicio >= fim) {
  console.log("Intervalo invalido!");
} else {
  console.log(`\nNo Intervalo entre ${inicio} e ${fim}:`);
  for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} é múltiplo de 3 e 5`);
    }
  }
}

