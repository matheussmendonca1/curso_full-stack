/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// const produto = {nome: 'Caneca', preco: 1.8};
// const caneca = Object.assign({}, produto, {material: 'Porcelana'});

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// Object.freeze(produto);
// produto.nome = 'Outro nome';
// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto));

// Object.defineProperty(produto, 'nome', {
    //     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'Outra coisa';
// delete produto.nome;


const produto = { nome: 'Produto', preco: 1.8, material: 'Porcelana' };
console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
