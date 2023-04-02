const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const section = document.querySelector('section');

// const changeBackground = () => {
//     paragrafos.style.backgroundColor = '#2d2d2d';
//     section.style.backgroundColor = '#ffffff';

// }

// changeBackground();

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;

console.log(backgroundColorBody);

for(let p of ps) {
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#2d2d2d';
}

