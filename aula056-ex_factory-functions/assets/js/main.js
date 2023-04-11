function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
        },

        realizaConta() {
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
        },

        clearDisplay() {
            this.display.value = ''; // Para limpar o display após o cálculo
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // Para remover um dígito por vez quando 'delete' for clicado.
        },

        cliqueBotoes() {
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
            }); // Faz com que o 'this' seja referente a calculadora e não ao document
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
