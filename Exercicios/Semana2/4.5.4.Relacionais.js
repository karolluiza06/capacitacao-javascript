//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.

const pessoa = {
    nome:'',
    idade: 0,
    altura:0.0
}

const pessoa1 = {
    nome:'Maria',
    idade:18,
    altura: 1.90
}

const pessoa2 = {
    nome:'Karol',
    idade:18,
    altura: 1.80
}

console.log("Nomes iguais?",pessoa1.nome===pessoa2.nome); 

console.log("É mais velho? ",pessoa1.idade>pessoa2.idade);

console.log("É mais alto? ",pessoa1.altura > pessoa2.altura);

console.log("Objetos iguais? ", pessoa1 === pessoa2);