function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey soul sister');
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('Terminou');
}
