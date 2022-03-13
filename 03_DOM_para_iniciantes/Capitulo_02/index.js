// window.alert("Isso mesmo");

const href = window.location.href

console.log(href);

if (href === "http://127.0.0.1:3000/c:/Users/edijunior/Desktop/programacao/Origamid_JavaScript_Completo/03_DOM_para_iniciantes/Capitulo_01/index.html") {
  console.log("É igual");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

function teste() {
  console.log("Clicou em ", h1Selecionado.innerText)
}

h1Selecionado.addEventListener("click", teste);
