let valorPorDia
let quantidadeDeDias
let valorPago

valorPorDia = prompt("INFORME O VALOR PAGO")

quantidadeDeDias = prompt("INFORME A QUANTIDADE DE DIAS")

valorPorDia = parseFloat(valorPorDia)
quantidadeDeDias = parseFloat(quantidadeDeDias)


valorPago = valorPorDia * quantidadeDeDias

alert("O valor pago pelo cliente sera de R$: " + valorPorDia * quantidadeDeDias)