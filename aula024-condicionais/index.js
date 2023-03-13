/*
 Entre 0 - 11 - Bom dia
 Entre 11 - 17 - Boa tarde
 Entre 18 - 23 - Boa noite
*/

const hora = 90;

if(hora >= 00 && hora <= 11) {
    console.log('Bom dia!'); 
} else if(hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if(hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!');
}

