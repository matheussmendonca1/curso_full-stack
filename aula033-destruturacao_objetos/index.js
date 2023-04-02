const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// const { endereco: { rua: r = 12345, numero}, endereco } = pessoa;

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
