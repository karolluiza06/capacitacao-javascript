//Faça um condicional para verificar se a nota de calculo deu para passar

// DESAFIO: dado um valor em R$, verificar se você precisa de moedas ou não
// Dica: tenta ver as casas decimais
const prompt = require('prompt-sync')({ sigint: true });

let num = 4;

if(num>=6.0)
    console.log("Você passou");
else
    console.log("Você não passou");

let valor = Number(prompt("Digite um número: ")); 

if(valor % 1 !== 0)
    console.log("Você precisará de moedas");
else
    console.log("Não precisará de moedas");

