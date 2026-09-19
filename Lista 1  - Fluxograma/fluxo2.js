const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));

numero = numero - 3;
numero = numero * 2;

console.log(numero);