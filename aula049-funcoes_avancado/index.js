// -> Declaração de função (Function hoisting);
falaOi(); // Exemplo de hoisting - chama a função antes de ela ser declarada

function falaOi() {
    console.log('Oi');
}

// -> First-class objects (objetos de primeira classe)
// -> Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

// function executaFuncao(funcao) {
//     funcao();
// }

// executaFuncao(souUmDado);

// ->  Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};

funcaoArrow();

// Dentro de um objeto
/* const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
}; */

const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();
