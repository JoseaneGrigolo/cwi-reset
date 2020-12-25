//Exercicios

//1.
function imprimir(x){
    console.log(x)
}

imprimir(5)

//2.
//funcção para verificar se os nomes são iguais
function mesmoNome(nome1, nome2) {
    return nome1 == nome2
}

//função para verificar se a pessoa é maior de idade
function maiorDeIdade(i){
    return i >= 18
}

//função para calcular os juros do boleto
function valorComJuros(y){
    return (y * 1.1).toFixed(2)
}

//funcção para calcular media
function mediaAritmetica(x){
let soma = 0;
    for(let i = 0; i < x.length; i++){
        soma += x[i]
    }
    return soma/x.length
}

//calcula margem bruta
function margemBruta(receitaLiquidaVendas, custoProdutosVendidos){
    let lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
    return ((lucroBruto/receitaLiquidaVendas) * 100).toFixed(2)
}

//3. chamada para os testes

cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]