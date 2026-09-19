const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));

numero = numero / 2;

if (numero > 20) {
    console.log(numero);
}