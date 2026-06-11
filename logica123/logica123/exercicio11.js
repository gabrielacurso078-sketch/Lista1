let idade
let mesesDoAno
let total

idade = prompt("INFORME O VALOR DA IDADE")

mesesDoAno = prompt("INFORME OS MESES DO ANO")

idade = parseFloat(idade)
mesesDoAno = parseFloat(mesesDoAno)

total = idade * mesesDoAno
alert("A idade sera de: " + idade * mesesDoAno)