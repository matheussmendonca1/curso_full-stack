// const nomes = ['Matheus', 'Mendonça'];

// for(let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }

// console.log('#######');

// for(let i in nomes) {
//     console.log(nomes[i]);
// }

// console.log('#######');

// for(let valor of nomes) {
//     console.log(valor);
// }

// console.log('#######');

// nomes.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// });

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Mendonça'
};

// For clássico - Geralmente com iteráveis (array ou string)
// For in - Retorna o índice ou chave (string, array, objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

for(let i in pessoa) {
    console.log(i, pessoa[i]);
}

