// for in lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maçã', 'Uva'];

// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for(let index in frutas) {
    console.log(frutas[index]);
}

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Mendonça',
    idade: 16
};

const chave = 'nome';
console.log(pessoa[chave]);

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
