const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número menor que 5: "));

if (numero < 5) {
    while (numero <= 20) {
        console.log(numero);
        numero++;
    }
}
