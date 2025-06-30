//Exercício 1
let salario = 10000.00;
let abono = 1000.00;

let novoSalario = salario + abono;

console.log("\nO novo salário é: " + novoSalario.toFixed(2));

//Exercício 2
let nota1 = 10.0;
let nota2 = 8.0;
let nota3 = 7.0;
let nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nMédia final: " + media.toFixed(1));

//Exercício 3
let salarioBruto = 2000.00;
let adicionalNoturno = 500.00;
let horasExtras = 100.00;
let descontos = 200.00;

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("\nSalário Líquido: " + salarioLiquido.toFixed(2));

//Exercício 4
let n1 = 5.0;
let n2 = 6.0;
let n3 = 7.0;
let n4 = 8.0;

let diferenca = (n1 * n2) - (n3 * n4);

console.log("\nDiferença: " + diferenca.toFixed(1));