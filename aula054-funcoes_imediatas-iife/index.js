// IIFE -> Imediately Invoked Function Expression

(function(idade, massa, altura) {
    const sobrenome = 'Mendonça';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Matheus'));
    }

    falaNome();
    console.log(idade, massa, altura);

})(16, 58, 1.83);
