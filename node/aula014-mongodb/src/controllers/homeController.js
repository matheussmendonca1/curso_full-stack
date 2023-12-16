// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Outro título',
//     descricao: 'Outra descrição.'
// })
//  .then(dados => console.log(dados))
//  .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send('Ei! Sou uma nova rota de POST.');
    return;
};
