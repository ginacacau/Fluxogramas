const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));

if (numero1 == numero2) {
    console.log(numero1);
    console.log(numero2);
}