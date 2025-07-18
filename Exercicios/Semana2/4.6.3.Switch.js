//Faça uma estrutura de switch para dado o código da sua matéria desse semestre
//ela irá imprimir no console o nome completo da materia

const prompt = require('prompt-sync')({ sigint: true });

let  materia;

 materia = prompt("Digite um codigo:");

switch(materia){
    case "CRSC03":
        console.log("Arquitetura de Computadores");
        break;
    case "MAT00A":
        console.log("Calculo A");
        break;
    case "XDES01":
        console.log("Fundamentos de Programação");
        break;
    case "XMAC01":
        console.log("Matematica Discreta");
        break;
    case "CAH04":
        console.log("Projeto Integrado");
        break;
    default:
        console.log("Materia invalida");
}
