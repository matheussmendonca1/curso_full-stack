// const pessoa1 = {
//     nome: 'Matheus',
//     sobrenome: 'Mendonça',
//     idade: 16
// };

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome, sobrenome, idade
//     };
// }

// const pessoa1 = criaPessoa('Matheus', 'Mendonça', 16);
// const pessoa2 = criaPessoa('Ricardo', 'Miranda', 16);
// const pessoa3 = criaPessoa('Estevan', 'Miller', 16);
// console.log(pessoa1);
// console.log(pessoa2); 
// console.log(pessoa3);

const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Mendonça',
    idade: 16,

    fala() {
        // console.log('Olá, Mundo!');
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
};

pessoa1.fala();