import * as readline from 'readline-sync';

// Exercício 1
const salario = Number(readline.question("Digite o salario: "));
const abono = Number(readline.question("Digite o abono: "));

const novoSalario = salario + abono;
console.log("\nO novo salario e: " + novoSalario.toFixed(2));

// Exercício 2
const nota1 = Number(readline.question("Digite a nota 1: "));
const nota2 = Number(readline.question("Digite a nota 2: "));
const nota3 = Number(readline.question("Digite a nota 3: "));
const nota4 = Number(readline.question("Digite a nota 4: "));

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("\nMédia final: " + media.toFixed(1));

// Exercício 3
const salarioBruto = Number(readline.question("Digite o salario bruto: "));
const adicionalNoturno = Number(readline.question("Digite o adicional noturno: "));
const horasExtras = Number(readline.question("Digite o valor das horas extras: "));
const descontos = Number(readline.question("Digite os descontos: "));

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;
console.log("\nSalário Líquido: " + salarioLiquido.toFixed(2));

// Exercício 4
const n1 = Number(readline.question("Digite o número n1: "));
const n2 = Number(readline.question("Digite o número n2: "));
const n3 = Number(readline.question("Digite o número n3: "));
const n4 = Number(readline.question("Digite o número n4: "));

const diferenca = (n1 * n2) - (n3 * n4);
console.log("\nDiferença: " + diferenca.toFixed(1));
