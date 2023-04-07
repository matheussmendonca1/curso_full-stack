// return
// Retorna um valor
// Termina a função

// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(2, 2));

// function criaPessoa(nome, sobrenome) {
//     return { nome: nome, sobrenome: sobrenome };
// }

// const p1 = criaPessoa('Matheus', 'Mendonça');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }

//     return falaResto;
// }

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);

// function duplica(n) {
//     return n*2;
// }
// console.log(duplica(3));

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
console.log(duplica(3));
