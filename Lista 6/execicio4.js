const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));
let multiplicador = 1;

while (multiplicador <= 10) {
    console.log(numero * multiplicador);
    multiplicador++;
}
