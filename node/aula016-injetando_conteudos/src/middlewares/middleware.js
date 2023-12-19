exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local';
    next();


    // if(req.body.cliente) {
    //     req.body.cliente = req.body.cliente.replace('Mendonça', 'NÃO USE MENDONÇA!');
    //     console.log();
    //     console.log(`Vi que você postou ${req.body.cliente}`);
    //     console.log();
    // }

};
