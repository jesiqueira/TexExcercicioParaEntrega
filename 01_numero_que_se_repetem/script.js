let qtdPortasAbertas = []

function sorteio() {
    return parseInt(Math.random() * 3) + 1
}

function criarArray() {
    let numeros = []
    for (let index = 0; index <= 2; index++) {
        numeros.push(sorteio())
    }
    return numeros
}
function numerosArrayIguais(array) {
    let numeros = array
    let igual = true

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[0] !== numeros[index]) {
            igual = false
        }
    }
    return igual
}

function verificaArrayIguais(anterior, atual) {
    // console.log(`anterior: ${anterior} - atual: ${atual}`);
    if (JSON.stringify(anterior) === JSON.stringify(atual)) {
        qtdPortasAbertas.push(true)
        console.log("Porta (x) : aberta")
    } else {
        if (!numerosArrayIguais(anterior)) {
            console.log("Tente de novo")
        }
    }
}

var anterior = criarArray()

for (let index = 0; index < 50; index++) {
    let atual = criarArray()
    if (qtdPortasAbertas.length === 3) {
        console.log(
            `Parabéns você fez ${index} jogadas e conseguiu abrir ${qtdPortasAbertas.length} portas ganhando o jogo.`
        )
        break
    }
    if (numerosArrayIguais(anterior)) {
        qtdPortasAbertas.push(true)
        console.log("Porta 1: aberta")
    } else {
        verificaArrayIguais(anterior, atual)
    }
    anterior = atual
    console.log("-------")
}
