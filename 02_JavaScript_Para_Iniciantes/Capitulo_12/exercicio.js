// nomeie 3 propriedades ou métodos de strings
var time = "Palmeiras";

time.replace("Palmeiras", "São Paulo"); //São Paulo
time.toUpperCase(); //PALMEIRAS
time.charAt(1); //a

// nomeie 5 propriedades ou métodos de elementos do DOM

var botao = document.querySelector(".btn");

botao.innerHTML = "Testando";
botao.className = "botaozinho";
botao.innerText = "Mudou de novo?";
botao.style.color = "red";
botao.textContent = "Aperte Crtl + C"

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
botao.addEventListener("copy", function(){
  return alert("Você apertou Ctrl + C para copiar alguma coisa")
})