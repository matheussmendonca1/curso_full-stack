const massa = document.querySelector('#imassa');
const altura = document.querySelector('#ialtura');

const resImc = document.querySelector('#res-imc');
const btn = document.querySelector('button');

const imc = () => {

    let p = document.querySelector('p.imc-calc');

    let calcImc = massa.value / (altura.value**2);


    if(calcImc < 18.5) {
        p.innerHTML = `<strong>Seu IMC é: ${calcImc.toFixed(2)}</strong>. Abaixo do peso!`;

        console.log(calcImc);
    } else if(calcImc >= 18.5 && calcImc <= 24.9) {
        p.innerHTML = `<strong>Seu IMC é: ${calcImc.toFixed(2)}</strong>. Peso normal.`;

        console.log(calcImc);
    } else if(calcImc >= 25 && calcImc <= 29.9) {
        p.innerHTML = `<strong>Seu IMC é: ${calcImc.toFixed(2)}</strong>. Sobrepeso!`;

        console.log(calcImc);
    } else if(calcImc >= 30 && calcImc <= 34.9) {
        p.innerHTML = `<strong>Seu IMC é: ${calcImc.toFixed(2)}</strong>. Obesidade grau I.`;

        console.log(calcImc);
    } else if(calcImc >= 35 && calcImc <= 39.9) {
        p.innerHTML = `<strong>Seu IMC é: ${calcImc.toFixed(2)}</strong>. Obesidade grau II.`;

        console.log(calcImc);
    } else if(calcImc >= 40) {
        p.innerHTML = `<strong>Seu IMC é: ${calcImc.toFixed(2)}</strong>. Obesidade grau III.`;

        console.log(calcImc);
    }

}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    imc();

});