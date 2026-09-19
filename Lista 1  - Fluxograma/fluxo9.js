const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));
let resultado;

resultado = numero - 3;
resultado = resultado + numero;

console.log(resultado);