var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
  console.log("É verdadeiro");
} else if(possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

var nome = '10kg' / 10;

if(nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if(!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log("Não possui graduação");
}

var x = 10;

console.log(x !== 11);