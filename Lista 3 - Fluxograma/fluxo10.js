const readline = require("readline-sync");

let numero = Number(readline.question("Digite um número: "));

if (numero < 10) {
    let resultado1 = numero * 1;
    let resultado2 = numero * 2;
    let resultado3 = numero * 3;
    let resultado4 = numero * 4;
    let resultado5 = numero * 5;
    let resultado6 = numero * 6;
    let resultado7 = numero * 7;
    let resultado8 = numero * 8;
    let resultado9 = numero * 9;
    let resultado10 = numero * 10;

    console.log(resultado1);
    console.log(resultado2);
    console.log(resultado3);
    console.log(resultado4);
    console.log(resultado5);
    console.log(resultado6);
    console.log(resultado7);
    console.log(resultado8);
    console.log(resultado9);
    console.log(resultado10);
}