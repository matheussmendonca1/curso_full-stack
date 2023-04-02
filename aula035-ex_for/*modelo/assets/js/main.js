const elementos = [
    {tag: 'p', texto: 'O jogo'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let element = document.createElement(tag);
    console.log(tag);
    div.appendChild(element);
    element.innerText = texto;
    container.appendChild(div);
}

