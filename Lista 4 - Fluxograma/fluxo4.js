const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let numero3 = Number(readline.question("Digite o terceiro número: "));

let maior;

if (numero1 > numero2) {
    maior = numero1;
} else {
    maior = numero2;
}

if (numero3 > maior) {
    maior = numero3;
}

console.log(maior);