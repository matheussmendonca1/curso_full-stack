/*
const nome = 'Matheus';
const sobrenome = 'Santos';

const falaNome = () => nome + ' ' + sobrenome;

console.log(module);
*/
/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; */
/*
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'Qualquer coisa que eu quiser.';

console.log(exports);
*/

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
