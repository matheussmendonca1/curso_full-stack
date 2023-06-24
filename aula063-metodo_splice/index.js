const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice atual, quantos elementos eu quero remover, elemento para adicionar (pode ser mais de um));
// pop
// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// const removidos = nomes.splice(3, 0, 'Ricardo');
// const removidos = nomes.splice(3, 2, 'Ricardo', 'Matheus');

// pop()
// const removidos = nomes.splice(-1, 1);

// shift()
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// push()
// const adicionados = nomes.splice(Number.MAX_VALUE /* ou nomes.length */, 0, 'Matheus');

// unshift()
const adicionados = nomes.splice(Number.MIN_VALUE /* ou 0 */, 0, 'Pedro');
console.log(nomes, adicionados);
