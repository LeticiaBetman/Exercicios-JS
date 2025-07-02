//Exercicio 06 (Lista 02)
const readline = require('readline-sync');

let nome = readline.question("\nNome do colaborador: ");
let codigoCargo = Number(readline.question("\nCodigo do Cargo (1 a 6): "));
let salario = Number(readline.question("\nSalario: R$ "));

let cargo = "";
let percentual = 0;

switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentual = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentual = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentual = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentual = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentual = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentual = 0.08;
        break;
    default:
        console.log("Código de cargo inválido.");
        break;
}

if (percentual > 0) {
    let novoSalario = salario + (salario * percentual);
    console.log(`\nNome do colaborador: ${nome}`);
    console.log(`\nCargo: ${cargo}`);
    console.log(`\nSalario: R$ ${novoSalario.toFixed(2)}`);
}