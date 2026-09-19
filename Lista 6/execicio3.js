const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));

if (numero1 < numero2) {
    while (numero1 <= numero2) {
        console.log(numero1);
        numero1++;
    }
} else {
    while (numero2 <= numero1) {
        console.log(numero2);
        numero2++;
    }
}
