const readline = require("readline-sync");

let numeros = ["10", "3", "6", "20","52","8" ]
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros [i] > 10 ) {
        contador = contador +1; 

  }
}
  console.log(contador);