const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let numero3 = Number(readline.question("Digite o terceiro número: "));
let resultado;

resultado = numero1 + numero2 + numero3;

if (resultado > 20) {
    console.log(resultado);
}