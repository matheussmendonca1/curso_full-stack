// function funcao(a, b, c, d, e, f) {
    // let total = 0;
    // for(let argumento of arguments) {
    //     total += argumento;
    // }

//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3,/* 4, 5, 6, 7 */);

// function somaAeB(a, b = 5, c = 4) {
//     b = b || 0;
//     console.log(a + b + c);
// }

// somaAeB(2, 6, 7);

// function desestruturado([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// // let obj = { nome: 'Matheus', sobrenome: 'Mendonça', idade: 16}
// desestruturado(['Matheus', 'Mendonça', 16]);

const conta = (...args) => {
    // for(let numero of numeros) {
    //     if(operador === '+') acumulador += numero;
    //     if(operador === '-') acumulador -= numero;
    //     if(operador === '/') acumulador /= numero;
    //     if(operador === '*') acumulador *= numero;
    // }
    console.log(args);
};
conta('/', 1, 20, 30, 40, 50);
