const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));

if (numero < 5) {
    console.log(numero);
}