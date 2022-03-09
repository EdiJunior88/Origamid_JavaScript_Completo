// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 34;
var idadeParente = 50;

if (minhaIdade > idadeParente) {
  console.log("É maior");
} else if (minhaIdade === idadeParente) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';   //Truthy
var idade = 28;   //Truthy
var possuiDoutorado = false;   //Falsy
var empregoFuturo;   //Falsy
var dinheiroNaConta = 0;   //Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil < china) {
  console.log("População maior - China: 1340 milhões de pessoas");
} else {
  console.log("População maior - Brasil: 207 milhões de pessoas");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//Cão

