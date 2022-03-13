// Retorne o url da página atual utilizando o objeto window

const url = window.document.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const querySelector = document.querySelector(".ativo");
console.log(querySelector);

// Retorne a linguagem do navegador

const linguagemNavegador = navigator.language;
console.log(`Linguagem do navegador: ${linguagemNavegador}`);

// Retorne a largura da janela 

const larguraJanela = window.innerWidth;
console.log(`Largura atual da janela: ${larguraJanela}px`);