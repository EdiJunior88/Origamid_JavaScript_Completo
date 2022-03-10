// Crie uma função para verificar se um valor é Truthy

function valorVerdadeiro(dado) {
  return !!dado;
}

console.log(valorVerdadeiro(20));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  var total = lado * 4
  return console.log(total);
}
perimetro(5);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  var nomeSobrenome = `${nome} ${sobrenome}`;
  return console.log(nomeSobrenome);
}
nomeCompleto("Edivaldo", "Junior");

// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  if (numero % 2 == 0) {
    return console.log("PAR");
  } else {
    return console.log("IMPAR");
  }
}
numeroPar(10);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoArgumento(dado) {
  var tipoDado = `Dado: ${dado} | Typeof: ${typeof dado}`
  return console.log(tipoDado);
}
tipoArgumento(16);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function(){
  console.log("Edivaldo Junior");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);