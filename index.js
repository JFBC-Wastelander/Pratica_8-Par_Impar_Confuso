const prompt = require('prompt-sync')()
const calculo = require('./function.js')
const numero = prompt("Digite um número: ")

let retorno = calculo.ehParOuImpar(numero)
console.log(retorno)