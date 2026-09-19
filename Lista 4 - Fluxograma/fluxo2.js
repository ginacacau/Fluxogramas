const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));

if (numero1 < numero2) {
    numero1 = numero1 + 5;
} else {
    numero2 = numero2 + 5;
}

if (numero1 > numero2) {
    console.log(numero1);
} else {
    console.log(numero2);
}