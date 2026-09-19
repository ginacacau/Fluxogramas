const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));

numero1 = numero1 + 5;
numero2 = numero2 + 5;

if (numero1 > 10) {
    console.log(numero1);
}

if (numero2 > 10) {
    console.log(numero2);
}