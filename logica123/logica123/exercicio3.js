let quantidadeDeProdutos
let preçoPorUnidade
let valorTotal

quantidadeDeProdutos = prompt("INFORME A QUANTIDADE DE PRODUTOS")

preçoPorUnidade = prompt("INFORME O PREÇO POR UNIDADE")

quantidadeDeProdutos = parseFloat(quantidadeDeProdutos)
preçoPorUnidade = parseFloat(preçoPorUnidade)


valorTotal = quantidadeDeProdutos * preçoPorUnidade

alert("O valor total é de R$: " + quantidadeDeProdutos * preçoPorUnidade)