//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente

let materia = ["Arquitetura de Computadores", "Calculo A", "Fundamentos de Programação", "Matematica Discreta", "Projeto Integrado"];
let mediaNotas = [8.6,7.9,7.1,8.6,10];

let soma = 0;

for(let i=0;i<mediaNotas.length;i++){
     soma = soma + mediaNotas[i];
}
let mediaFinal = soma/mediaNotas.length;

console.log("A média é: ",mediaFinal);

const boletim = {};

for(let i=0;i<materia.length;i++){
     boletim[materia[i]] = mediaNotas[i];
}

console.log("Boletim: ",boletim);
