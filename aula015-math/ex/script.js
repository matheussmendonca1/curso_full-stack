const numeroPrompt = Number(prompt('Informe um número: '));
let numTitulo = document.getElementById('num-titulo');
let texto = document.getElementById('texto');

numTitulo.innerHTML = numeroPrompt;

texto.innerHTML = '';

texto.innerHTML += `<p>A raíz quadrada desse número é: <strong>${numeroPrompt ** .5}</strong>.</p>`;
texto.innerHTML += `<p>${numeroPrompt} é inteiro? <strong>${Number.isInteger(numeroPrompt)}</strong>.</p>`;
texto.innerHTML += `<p>${numeroPrompt} é NaN? <strong>${Number.isNaN(numeroPrompt)}</strong>.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numeroPrompt)}</strong>.</p>`;
texto.innerHTML += `<p>Arredondando para cima <strong>${Math.ceil(numeroPrompt)}</strong>.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numeroPrompt.toFixed(2)}</strong>.</p>`;
