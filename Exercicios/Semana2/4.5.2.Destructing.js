/*
Exercício de Destructuring em JavaScript

1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];

a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variavel d.

2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.
*/

const numbers = [1, 2, 3, 4, 5];
const [a,b,c] = numbers;
const [, , ,...d] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const {name,age,city} = person;

console.log(name);
console.log(age);
console.log(city);

const PersonResume = {name,age};

console.log(PersonResume);