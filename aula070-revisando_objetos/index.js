// const pessoa = {
//     nome: "João",
//     sobrenome: "Pedro"
// };
// const chave = 'nome'
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Matheus';
// pessoa1.sobrenome = 'Mendonça';
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {
//     return(`${this.nome} ${this.sobrenome}`);
// };

// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// delete pessoa1.nome;
// for(let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Otávio');
// Object.freeze(p1);
// p1.nome = 'Outra coisa';
const p2 = new Pessoa('Matheus', 'Mendonça');
console.log(p1);
console.log(p2);
