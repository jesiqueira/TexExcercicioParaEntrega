function sorteio() {
  return parseInt(Math.random() * 3) + 1;
}

function criarArray() {
  let numeros = [];
  for (let index = 0; index <= 2; index++) {
    numeros.push(sorteio());
  }
  return numeros;
}
function numerosArrayIguais(array) {
  let numeros = array;
  let igual = true;

  for (let index = 0; index < numeros.length; index++) {
    if (numeros[0] !== numeros[index]) {
      igual = false;
    }
  }
  return igual;
}

function numerosRepetidos(numeros) {
  let repete = 0;
  if (!numerosArrayIguais(numeros)) {
    for (let index = 0; index < numeros.length; index++) {
      for (let j = 0; j < numeros.length; j++) {
        if (index !== j) {
          if (numeros[index] === numeros[j]) {
            repete++;
          }
        }
      }
    }
  } else {
    repete = numeros.length;
  }
  return repete;
}

function verificaArrayIguais(anterior, atual) {
  console.log(`anterior: ${anterior} - atual: ${atual}`);
  if (JSON.stringify(anterior) === JSON.stringify(atual)) {
    console.log('Porta (x) : aberta');
  } else {
    if (!numerosArrayIguais(anterior)) {
      console.log('Tente de novo');
    }
  }
}

var numeros = criarArray();
for (let index = 0; index < 50; index++) {
  let atual = criarArray();
  // console.log(numeros)
  verificaArrayIguais(numeros, atual);
  numerosArrayIguais(numeros) === true
    ? console.log('Numeros iguais ->  Porta 1: aberta')
    : '';
  console.log('Número anterior se repetem: ', numerosRepetidos(numeros));
  numeros = atual;
  console.log('-----------------------------------------------------');
}
