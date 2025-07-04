//Exercicio 05 (Lista 02)
const readline = require('readline-sync');

let codigo = Number(readline.question("Codigo do Produto (1 a 6): "));
let quantidade = Number(readline.question("Quantidade: "));

let produto = "";
let preco = 0;

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;
    default:
        console.log("Codigo de produto invalido");
        break;
}

if (preco > 0) {
    let total = preco * quantidade;
    console.log(`Produto: ${produto}`);
    console.log(`Valor total: R$ ${total.toFixed(2)}`);
}


