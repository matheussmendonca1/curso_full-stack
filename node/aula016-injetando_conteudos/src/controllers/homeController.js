// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Outro título',
//     descricao: 'Outra descrição.'
// })
//  .then(dados => console.log(dados))
//  .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    console.log(req.session.usuario);
    res.render('index', {
        titulo: 'Este é o título da página.',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send('Ei! Sou uma nova rota de POST.');
    return;
};
