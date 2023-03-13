function meuEscopo() {
    const form = document.querySelector('.form');

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    // };

    const pessoas = [];

    
    
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const massa = form.querySelector('.massa');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            massa: massa.value,
            altura: altura.value
        });

        console.log(pessoas);
        
        let result = document.querySelector('#result');
    
        result.innerHTML += `<p>${nome.value} ${sobrenome.value}</p>`;
        result.innerHTML += `<p>${massa.value}Kg</p>`;
        result.innerHTML += `<p>${altura.value}m</p>`;
    } 

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();