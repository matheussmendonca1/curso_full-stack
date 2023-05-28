// Função construtora retorna objetos
// Função fábrica fabrica objetos
// Construtora -> new Pessoa

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = function() {
        
    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Matheus', 'Mendonça');
p1.metodo()
console.log();
