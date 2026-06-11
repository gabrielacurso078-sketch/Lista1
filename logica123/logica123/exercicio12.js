let distanciaPercorrida
let tempoGasto
let velocidadeMedia

distanciaPercorrida = prompt("INFORME O VALOR DA DISTANCIA PERCORRIDA")

tempoGasto = prompt("INFORME O VALOR DO TEMPO GASTO")

distanciaPercorrida = parseFloat(distanciaPercorrida)
tempoGasto = parseFloat(tempoGasto)


velocidadeMedia = distanciaPercorrida / tempoGasto

alert("A velocidade media sera de: " + distanciaPercorrida / tempoGasto)