const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let numero3 = Number(readline.question("Digite o terceiro número: "));

let menor;

if (numero1 < numero2) {
    menor = numero1;
} else {
    menor = numero2;
}

if (numero3 < menor) {
    menor = numero3;
}

menor = menor + 5;

console.log(menor);