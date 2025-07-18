//Declare um objeto para representar seu personagem favorito
//Seja criativo com as propriedades

//Transforme os dois vetores de Arrays.js em um objeto
//Cada matéria representará uma propriedade do objeto,
//com sua nota correspondente sendo o valor associado a essa propriedade.

const personagem = {
   nome: "Peter Benjamin Parker",
   codinome: "Homem-Aranha",
   habilidades: [
    "Força e Agilidade Proporcionais à de uma Aranha",
    "Sentido-Aranha (pressentimento de perigo)",
    "Reflexos Aprimorados",
    "Capacidade de Aderir a Superfícies (escalada)"],
}
console.log("Nome: ",personagem.nome);
console.log("Codinome: ",personagem.codinome);
console.log("Habilidades: ",personagem.habilidades);

let materia = ["Arquitetura de Computadores", "Calculo A", "Fundamentos de Programação", "Matematica Discreta", "Projeto Integrado"];
let mediaNotas = [8.6,7.9,7.1,8.6,10];

const boletim = {};

for(let i=0;i<materia.length;i++){
     boletim[materia[i]] = mediaNotas[i];
}

console.log("Boletim: ",boletim);
