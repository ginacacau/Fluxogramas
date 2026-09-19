const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let resultado;

resultado = numero1 - numero2;
resultado = resultado + 10;

console.log(resultado);