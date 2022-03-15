// const imgs = document.querySelectorAll("img");
// console.log(imgs);

// imgs.forEach(function(item, index, array){
//   // console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function(item, index, array){
  // console.log(item, index, array);
});

const imgs = document.querySelectorAll("img");
console.log(imgs);

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

let i = 0;
imgs.forEach(function() {
  console.log(i++)
});

imgs.forEach(() => console.log(i++));