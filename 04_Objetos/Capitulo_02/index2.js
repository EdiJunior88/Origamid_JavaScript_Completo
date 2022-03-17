// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   }
// }

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }

  this.ativar = function(classe) {
    this.element().classList.add(classe);
  }
}

const li = new Dom("li");
const ul = new Dom("ul");

const lastLi = new Dom("li:last-child");
lastLi.ativar("ativar");