const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Matheus', sobrenome: 'Mendonça' };
//     console.log();
//     console.log('Passei no middleware.');
//     console.log();
//     next();
// }

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Para contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
