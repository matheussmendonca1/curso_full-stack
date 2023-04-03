// try {
//     // Executada quando não há erros

//     // console.log(a);
//     console.log('Abri um arquivo.');
//     console.log('Manipulei o arquivo e deu erro.');
//     console.log('Fechei o arquivo.');

//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro.')
//     } finally {
//         console.log('Também sou finally.');
//     }

// } catch(e) {
//     // Executada quando não há erros
//     console.log('Tratando o erro.');
// } finally {
//     // Sempre executado

//     console.log('FINALLY: Eu sempre executado.');
// }

function returnHour(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data) {
        data = new Date;
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = returnHour(23);
    console.log(hora);
} catch(e) {
    // Tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia.');
}

