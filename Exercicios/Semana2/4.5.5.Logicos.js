//a) Escreva um programa que verifica se um número digitado pelo usuário é positivo e par.
//Se o número atender a essas duas condições, exiba a mensagem 'O número é positivo e par', caso contrário, exiba a mensagem 'O número não é positivo e par'.


//b) Agora, teste se ele é positivo ou par, mas não ambos. Se o número atender a uma das condições, exiba a mensagem 'O número é positivo ou par', caso contrário, exiba a mensagem 'O número não é positivo ou par'.


//c) Por fim, teste se as variáveis do da letra a e b são iguais. Se forem, exiba a mensagem 'Os números são iguais', caso contrário, exiba a mensagem 'Os números são diferentes'.

const prompt = require('prompt-sync')({ sigint: true });

const x = Number(prompt("Digite um número: "));  

if (x > 0 && x % 2 === 0) {
    console.log("É positivo e par");
} else {
    console.log("O número não é positivo e par");
}

if ((x > 0 || x % 2 === 0) && !(x > 0 && x % 2 === 0)) {
    console.log("O número é positivo ou par, mas não ambos");
} else {
    console.log("O número não é positivo ou par (ou é ambos)");
}

const a = Number(prompt("Digite um número: "));  
const b = Number(prompt("Digite um número: "));  

if (a === b) {
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}