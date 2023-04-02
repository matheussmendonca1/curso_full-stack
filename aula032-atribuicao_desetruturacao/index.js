// ...rest operator ...spread operator

// const numeros =  [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres, ...resto] = numeros;

// console.log(um, dois, tres);
// console.log(resto);

// const numeros =  [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, ,tres, , cinco, sete] = numeros;

// console.log(um, tres, cinco);



const numeros = [
    [1, 2, 3], // 0
    [4, 5, 6], // 1
    [7, 8, 9]  // 2
];
// console.log(numeros[1][1]);

// const [,[,,seis]] = numeros;
const [lista1, lista2, lista3] = numeros;
console.log(lista2[1]);
