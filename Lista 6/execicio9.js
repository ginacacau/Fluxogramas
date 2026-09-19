const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número maior que 20: "));

if (numero > 20) {
    while (numero >= 1) {
        console.log(numero);
        numero--;
    }
}
