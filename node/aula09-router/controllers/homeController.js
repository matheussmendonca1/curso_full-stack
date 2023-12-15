exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nomeEnviado"><br>
        Outro: <input type="text" name="outroCampo"><br>
        <button>Enviar</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei! Sou uma nova rota de POST.');
};
