let resposta = document.getElementById('resposta')

function calcular() {

    let numero01 = document.getElementById('numero01')
    let numero02 = document.getElementById('numero02')
    let num01 = Number(numero01.value)
    let num02 = Number(numero02.value)

    if (numero01.value == "") {
        resposta.innerHTML = 'Preencha todas as caixas para proceguir!'
    } else if (numero02.value == ""){
        resposta.innerHTML = 'Preencha todas as caixas para proceguir!'
    } else {
        let numsoma = (num01 + num02)
        resposta.innerHTML = `O resultado é <br> ${numsoma}`
    }
}
function multiplicar() {

    let numero01 = document.getElementById('numero01')
    let numero02 = document.getElementById('numero02')
    let num01 = Number(numero01.value)
    let num02 = Number(numero02.value)

    if (numero01.value == "") {
        resposta.innerHTML = 'Preencha todas as caixas para proceguir!'
    } else if (numero02.value == ""){
        resposta.innerHTML = 'Preencha todas as caixas para proceguir!'
    } else {
        let numsoma = (num01 * num02)
        resposta.innerHTML = `O resultado é <br> ${numsoma}`
    }
}
function divisão() {

    let numero01 = document.getElementById('numero01')
    let numero02 = document.getElementById('numero02')
    let num01 = Number(numero01.value)
    let num02 = Number(numero02.value)

    if (numero01.value == "") {
        resposta.innerHTML = 'Preencha todas as caixas para proceguir!'
    } else if (numero02.value == ""){
        resposta.innerHTML = 'Preencha todas as caixas para proceguir!'
    } else {
        let numsoma = (num01 / num02)
        resposta.innerHTML = `O resultado é <br> ${numsoma}`
    }
}