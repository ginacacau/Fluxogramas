const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));

numero = numero - 10;

if (numero > 3) {
    console.log(numero);
}