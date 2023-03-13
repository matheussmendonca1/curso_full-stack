/*
&& -> false && true --> false
|| -> false || true --> Vai retornar o "valor verdadeiro"
FALSY
*false
0
'', "", ``
null / undefined
NaN
*/

// console.log('Luis' && undefined && 'Maria');

// function falaOi() {
//     return 'Oi';
// }

// const vaiExec = 'Joãozinho';

// console.log(vaiExec && falaOi());

// console.log(0 || false || null || 'Luiz' || true);

// const corUsuario = null;
// const corPadrao = corUsuario || 'preto';

// console.log(corUsuario);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b|| c || d|| e);