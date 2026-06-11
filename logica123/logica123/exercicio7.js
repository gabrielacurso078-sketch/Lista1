let valorDoDesconto
let produto
let total

valorDoDesconto = prompt("INFORME O VALOR DO DESCONTO")

produto = prompt("INFORME O VALOR DO PRODUTO")

valorDoDesconto = parseFloat(valorDoDesconto)
produto = parseFloat(produto)


total = valorDoDesconto * produto / 100

alert("O desconto sera de: " + valorDoDesconto * produto / 100 )