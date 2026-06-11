let salarioSemanal //entrada - input
let horasTrabalhadas //entrada - input
let valorPorHora //saída - output

salarioSemanal = prompt("INFORME O SALARIO MENSAL")

horasTrabalhadas = prompt("INFORME AS HORAS TRABALHADAS")

salarioSemanal = parseFloat(salarioSemanal)
horasTrabalhadas = parseFloat(horasTrabalhadas)


valorPorHora = salarioSemanal * horasTrabalhadas

alert("O valor pago por hora é de R$: " + salarioSemanal * horasTrabalhadas)