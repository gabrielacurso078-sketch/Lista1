let peso
let altura
let total

peso = prompt("INFORME O VALOR DO PESO EM KG")

altura = prompt("INFORME A ALTURA EM METROS")

peso = parseFloat(peso)
altura = parseFloat(altura)


total = peso * altura * altura

alert("O IMC sera de: " + peso * altura * altura)