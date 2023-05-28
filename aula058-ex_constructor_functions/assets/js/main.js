function Calculadora() {
    display: document.querySelector('.display');
    btnClear: document.querySelector('.btn-clear');

    this.inicia = function() {
        cliqueBotoes();
    };

    this.realizaConta = function() {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida!');
            }

            this.display.value = String(conta);
        } catch(e) { // Caso os dígitos do display sejam inválidos
            alert('Conta inválida!');
            return;
        }
    };

    this.clearDisplay = function() {
        display.value = ''; // Para limpar o display após o cálculo
    };

    this.apagaUm = function() {
        this.display.value = this.display.value.slice(0, -1); // Para remover um dígito por vez quando 'delete' for clicado.
    };

    this.cliqueBotoes = function() {
        // this -> calculadora
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            
            if(el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        }); // arrow function faz com que o 'this' seja referente a calculadora e não ao document
    };

    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    };

}

const calculadora = new Calculadora();
calculadora.inicia();
