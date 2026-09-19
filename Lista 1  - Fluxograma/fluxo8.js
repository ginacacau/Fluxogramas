const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let numero3 = Number(readline.question("Digite o terceiro número: "));

numero1 = numero1 + 10;
numero2 = numero2 - 5;
numero3 = numero3 * 2;

console.log(numero1);
console.log(numero2);
console.log(numero3);