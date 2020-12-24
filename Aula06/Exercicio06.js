//Exercício: IMC calculo

let peso = 90
let altura = 1.60
let imc = peso / (altura**2)
let classificacao = ""

if(imc < 18.5){
    classificacao = "magro"
} else if(imc < 25){
    classificacao = "normal"    
} else if(imc < 30){
    classificacao = "com sobrepeso"
} else if(imc < 40){
    classificacao = "obeso"
} else {
    classificacao = "obeso com gravidade"
}

console.log("Valor do IMC: " + imc.toFixed(2) + " Classificação: " +  classificacao)


if(imc >= 25) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
}

if(imc >= 40) {
    console.log("É importante procurar um médico para avaliar sua saúde.")
} 
 