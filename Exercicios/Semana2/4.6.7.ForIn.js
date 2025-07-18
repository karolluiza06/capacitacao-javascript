//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria

//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota

let materia = ["Arquitetura de Computadores", "Calculo A", "Fundamentos de Programação", "Matematica Discreta", "Projeto Integrado"];
let mediaNotas = [8.6,7.9,7.1,8.6,10];


const boletim = {};

for(let i=0;i<materia.length;i++){
     boletim[materia[i]] = mediaNotas[i];
}

for (const materia in boletim) {
    console.log(`${materia}: ${boletim[materia]}`);
}
