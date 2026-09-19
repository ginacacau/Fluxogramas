const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));

if (numero1 < numero2) {
    numero1 = numero1 * 10;
    numero2 = numero2 / 2;
} else {
    numero2 = numero2 * 10;
    numero1 = numero1 / 2;
}

let resultado = numero1 + numero2;

if (resultado % 2 == 0) {
    console.log("O resultado é par");
} else {
    console.log("O resultado é ímpar");
}