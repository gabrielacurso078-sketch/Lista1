let quatidadeDeIngresos
let valorUnitario
let montanteArrecadado

quatidadeDeIngresos = prompt("INFORME A QUANTIDADE DE INGRESOS")

valorUnitario = prompt("INFORME O VALOR UNITARIO")

quatidadeDeIngresos = parseFloat(quatidadeDeIngresos)
valorUnitario = parseFloat(valorUnitario)

montanteArrecadado = quatidadeDeIngresos * valorUnitario

alert("O valor do montante sera de: " + quatidadeDeIngresos * valorUnitario)
