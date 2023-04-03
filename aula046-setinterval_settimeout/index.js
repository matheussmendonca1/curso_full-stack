function showHours() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hou12: false
    });
}

// primeiro exemplo:

/* 
function functionOfInterval() {
    console.log(showHours());
}
 setInterval(functionOfInterval, 1000); 

*/

const timer = setInterval(() => {
    console.log(showHours());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 3000);

setTimeout(() => {
    console.log('Olá, Mundo!');
}, 5000);
