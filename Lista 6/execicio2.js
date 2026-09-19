const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));

while (numero <= 20) {
    console.log(numero);
    numero++;
}
