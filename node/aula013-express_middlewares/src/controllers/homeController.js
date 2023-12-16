exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send('Ei! Sou uma nova rota de POST.');
    return;
};
