function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 4000);

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  console.log(this);
  this.marca = marca;
  console.log(this);
  this.preco = precoFinal;
  console.log(this);
}

const mazda = new Carro2("Mazda", 5000);