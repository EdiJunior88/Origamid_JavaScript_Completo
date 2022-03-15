const listaAnimais = document.querySelector(".animais-lista");

const heigth = listaAnimais.scrollHeight;
const animaisTopo = listaAnimais.offsetTop;

console.log(animaisTopo);

const primeiroH2 = document.querySelector("h2");
const h2left = primeiroH2.offsetLeft;

const h2Rect = primeiroH2.getBoundingClientRect();

console.log(h2Rect);

if(h2Rect.top < 0) {
  console.log("Passou do elemento");
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia("(max-width: 600px)").matches;

if(small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário Desktop");
}