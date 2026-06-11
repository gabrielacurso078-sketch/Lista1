let unidadesProduzidas
let valorPorUnidade
let custo

unidadesProduzidas = prompt("INFORME QUANTAS UNIDADES")

valorPorUnidade = prompt("INFORME O VALOR DAS UNIDADES")

unidadesProduzidas = parseFloat(unidadesProduzidas)
valorPorUnidade = parseFloat(valorPorUnidade)

custo = unidadesProduzidas * valorPorUnidade

alert("O custo total sera de: " + unidadesProduzidas * valorPorUnidade)