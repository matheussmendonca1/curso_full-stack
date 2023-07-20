function teste() {
    console.log('Isso é um teste!');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Métodos de instância
    aumentarVolume() {
        this.volume+=2;
    }

    diminuirVolume() {
        this.volume-=2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Pilha trocada');
    }
}

const controle1 = new ControleRemoto('LG');
// ControleRemoto.trocaPilha();
// controle1.trocaPilha(); -> Não é possível chamar uma função estática assim!
// console.log(controle1);
