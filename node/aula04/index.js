const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);

    walk(files);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        console.log(file, stats.isDirectory());

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }
    }
}

readdir('/home/matheuss1/Documentos/programming/curso_js-udemy/curso-js_udemy/node');
