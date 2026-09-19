const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite um número maior que 10: "));
let numero2 = Number(readline.question("Digite um número menor que 5: "));

if (numero1 > 10) {
    console.log(numero1);
}

if (numero2 < 5) {
    console.log(numero2);
}
