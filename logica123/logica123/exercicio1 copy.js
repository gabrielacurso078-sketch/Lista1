let distanciaPercorrida //entrada - input
let combustivelEmLitros //emtrada - input
let consumoMedio // saída - output

distanciaPercorrida = prompt(" INFORME A DISTÂMCIA PERCORRIDA EM KM")

combustivelEmLitros = prompt("INFORME A QUANTIDADE GASTA DE COMBUSTIVEL EM LITROS")

distanciaPercorrida = parseFloat(distanciaPercorrida)
combustivelEmLitros = parseFloat(combustivelEmLitros)


consumoMedio = distanciaPercorrida / combustivelEmLitros

alert("O comsumo médio do veículo é: " + consumoMedio + "litros")