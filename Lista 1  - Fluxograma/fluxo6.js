const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let resultado1;
let resultado2;
let resultado;

resultado1 = numero1 - 3;
resultado2 = numero2 + 2;

resultado = resultado1 + resultado2;
resultado = resultado - 1;

console.log(resultado);