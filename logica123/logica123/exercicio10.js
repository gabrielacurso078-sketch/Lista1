let litrosConsumidos
let preçoPorLitro
let total

litrosConsumidos = prompt("INFORME OS LITROS CONSUMIDOS")

preçoPorLitro = prompt("INFORME O VALOR DO PREÇO POR LITRO")

litrosConsumidos = parseFloat(litrosConsumidos)
preçoPorLitro = parseFloat(preçoPorLitro)

total = litrosConsumidos * preçoPorLitro

alert("O valor total sera de: " + litrosConsumidos * preçoPorLitro)