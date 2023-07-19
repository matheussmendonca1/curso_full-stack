const pessoas = [
    {id:3, nome: 'Luiz'},
    {id:2, nome: 'Maria'},
    {id:1, nome: 'Helena'},
];

// const novasPesoas = {};
// for(const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPesoas[id] = { ...pessoa };
// }

const novasPesoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPesoas.set(id, { ...pessoa });
}

for(const pessoas of novasPesoas) {
    console.log(pessoas);
}
