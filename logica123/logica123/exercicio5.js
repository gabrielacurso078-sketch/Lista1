let metros
let litros
let quantidadeDeTinta

metros = prompt("INFORME A QUANTIDADE DE METROS CUBICOS")

litros = prompt("INFORME DA QUANTIDADE DE LITROS")

metros = parseFloat(metros)
litros = parseFloat(litros)

quantidadeDeTinta = metros * litros

alert("A quantidade de tinta sera de: " + metros * litros )