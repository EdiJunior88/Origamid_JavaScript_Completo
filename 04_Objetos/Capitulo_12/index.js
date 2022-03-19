console.log(Number.isNaN("NaN"));
console.log(Number.isInteger(10.434343));

console.log(parseFloat("  343434,4545"));
console.log(parseFloat("100.27 reais"));
console.log(parseInt("100.27 reais", 10));
console.log(parseInt(23.49, 10));

const preco = 10.32323;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL" 
})
console.log(valor);

console.log(Math.PI);

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(aleatorio);

