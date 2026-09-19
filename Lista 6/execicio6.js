const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número menor que 10: "));

if (numero < 10) {
    console.log(numero);
}
