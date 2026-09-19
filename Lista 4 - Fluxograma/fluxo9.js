const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let numero3 = Number(readline.question("Digite o terceiro número: "));
let numero4 = Number(readline.question("Digite o quarto número: "));

let resultado;

resultado = numero1 + numero2;
resultado = resultado - numero3;
resultado = resultado - numero4;

if (resultado > 10) {
    console.log("Resultado maior que dez");
} else {
    console.log("Resultado menor ou igual a dez");
}