class DispositivoEletreonico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + ' ligado!');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(this.nome + ' desligado!');
            return;
        }

        this.ligado = false; 
    }
}

class Smartphone extends DispositivoEletreonico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'rosa', 'Galaxy S22');
console.log(s1);
