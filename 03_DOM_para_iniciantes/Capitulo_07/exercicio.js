// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll("img");
console.log(imagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const listaImagens = document.querySelectorAll("img[src^='img/imagem']")
console.log(listaImagens);

// Selecione todos os links internos (onde o href começa com #
const links = document.querySelectorAll("[href^='#']");
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll("p");
const selecionaUltimoP = ultimoP[ultimoP.length - 1];
console.log(selecionaUltimoP);