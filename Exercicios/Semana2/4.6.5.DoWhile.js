//Como o Do While não é frequentemente usado seja criativo e crie um exemplo de uso para ele

const prompt = require('prompt-sync')({ sigint: true });
const numSecreto = Math.floor(Math.random()*10) + 1;
let palpite;

console.log("Chute um número de 1 a 10");

do{
    palpite = parseInt(prompt("Digite o número que deseja chutar:"));

    if(palpite === numSecreto)
        console.log("Acertou!!");
    else
        console.log("Tente novamente");
}while(palpite !== numSecreto);