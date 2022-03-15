// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");

menu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach((item) => {
  item.classList.remove("ativo");  
});

menu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");

imagens.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu

const linkExterno = document.querySelector("a[href^='http']");

linkExterno.setAttribute("href", "https://www.google.com.br");
console.log(linkExterno);