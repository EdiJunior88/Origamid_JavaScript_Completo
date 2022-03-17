function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return "abraçou";
  }
}

Pessoa.prototype.andar = function() {
  return this.nome + " Pessoa andou";
}

Pessoa.prototype.nadar = function() {
  return this.nome + " Pessoa nadou";
}

const andre = new Pessoa("André", 28);

// console.log(Pessoa.prototype);
// console.log(andre.prototype);

const pais = "Brasil";
const cidade  = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];


const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: "Ford",
  preco: 3000,
  andar() {
    return true;
  }
}
