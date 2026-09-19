const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));

numero = numero * 3;

if (numero > 15) {
    console.log(numero);
}