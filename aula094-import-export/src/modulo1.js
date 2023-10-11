export const nome = 'Matheus';
export const sobrenome = 'Mendonça';
export const idade = 16;

export default function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
