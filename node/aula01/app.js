/* const {nome, sobrenome, falaNome} = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());
*/


/* const mod1 = require('./mod1');
console.log(mod1);

mod1.falaNome(); */

/* const  falaNome = require('./mod1').falaNome;
const falaNome = mod1.falaNome; */

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));