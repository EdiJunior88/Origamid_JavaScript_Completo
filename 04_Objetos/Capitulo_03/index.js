function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return "abraçou";
  }
  this.andar = function() {
    return "andou pelo objeto"
  }
}

Pessoa.prototype.andar = function() {
  return this.nome + " Pessoa andou";
}

Pessoa.prototype.nadar = function() {
  return this.nome + " Pessoa nadou";
}

const andre = new Pessoa("André", 28);

console.log(Pessoa.prototype);
console.log(andre.prototype);