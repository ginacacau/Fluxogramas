const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));
let numero1;
let numero2;

numero1 = numero / 2;
numero2 = numero / 2;

numero1 = numero1 + 3;
numero2 = numero2 + 5;

console.log(numero1);
console.log(numero2);