const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));

numero = numero + 5;

if (numero < 10) {
    console.log(numero);
}