const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let numero3 = Number(readline.question("Digite o terceiro número: "));
let auxiliar;

if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

if (numero1 > numero3) {
    auxiliar = numero1;
    numero1 = numero3;
    numero3 = auxiliar;
}

if (numero2 > numero3) {
    auxiliar = numero2;
    numero2 = numero3;
    numero3 = auxiliar;
}

console.log(numero1);
console.log(numero2);
console.log(numero3);