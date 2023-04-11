// Global
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Matheus');
const funcao2 = retornaFuncao('Carlos');
console.log(funcao());
console.log(funcao2());
