const readline = require("readline-sync");

let numero1 = Number(readline.question("Digite o primeiro número: "));
let numero2 = Number(readline.question("Digite o segundo número: "));
let numero3 = Number(readline.question("Digite o terceiro número: "));

let maior;
let menor;

if (numero1 > numero2) {
    if (numero1 > numero3) {
        maior = numero1;
        menor = numero2;
    } else {
        maior = numero3;
        menor = numero1;
    }
} else {
    if (numero2 > numero3) {
        maior = numero2;
        menor = numero1;
    } else {
        maior = numero3;
        menor = numero2;
    }
}

while (menor <= maior) {
    console.log(menor);
    menor++;
}

for (let i = segundoMaior; i <= maior; i++) {
    console.log(i);
}
