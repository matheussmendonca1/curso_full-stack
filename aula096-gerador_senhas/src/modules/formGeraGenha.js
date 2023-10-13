import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');

const checkMaiusculas = document.querySelector('.chk-maiusculas').checked;
const checkMinusculas = document.querySelector('.chk-minusculas').checked;
const checkNumeros = document.querySelector('.chk-numeros').checked;
const checkSimbolos = document.querySelector('.chk-simbolos').checked;

const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', (e) => {
        
        senhaGerada.innerHTML = gera();
        e.preventDefault();

    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value, 
        checkMaiusculas, 
        checkMinusculas, 
        checkNumeros, 
        checkSimbolos
    );

    return senha || 'Nada selecionado';

}
