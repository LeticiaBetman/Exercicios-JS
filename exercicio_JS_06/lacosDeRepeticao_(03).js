//Exercicio 5 (Lista 03 — Laço de Repetição DO… WHILE)
const readline = require('readline-sync');

let soma = 0;
let numero;

do {
  numero = Number(readline.question("Digite um numero: "));

  if (numero > 0) {
    soma += numero;
  }

} while (numero !== 0);

console.log(`\nA soma dos numeros positivos e: ${soma}`);