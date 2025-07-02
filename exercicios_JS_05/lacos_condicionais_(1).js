//Exercício 1 (Lista 01)
import { question } from 'readline-sync';

let A = Number(question("\nDigite o numero A: "));
let B = Number(question("\nDigite o numero B: "));
let C = Number(question("\nDigite o numero C: "));

let soma = A + B;
console.log(`\n${A} + ${B} = ${soma}`);

if (soma > C) {
  console.log("\nA Soma de A + B e Maior do que C");
} 
else if (soma < C) {
  console.log("\nA Soma de A + B e Menor do que C");
} 
else {
  console.log("\nA Soma de A + B e Igual a C");
}

//Exercício 2 (Lista 01)
let numero = Number(readline.question("Digite um numero: "));

if (numero % 2 === 0) {
  console.log("O numero e par!");
} 
else {
  console.log("O numero e impar!");
}

if (numero >= 0) {
  console.log("E positivo!");
} 
else {
  console.log("E negativo!");
}

