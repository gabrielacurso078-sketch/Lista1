let largura
let comprimento
let perimetro

largura = prompt("INFORME O VALOR DA LARGURA")

comprimento = prompt("INFORME O VALOR DO COMPRIMENTO")

largura = parseFloat(largura)
comprimento = parseFloat(comprimento)

perimetro = largura * comprimento

alert("O perimetro sera de: " + largura * comprimento)