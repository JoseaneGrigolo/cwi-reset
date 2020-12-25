//função
function atravessar() {
    console.log("Olhar para direita")
    console.log("Olhar para esquerda")
    console.log("Atravessar")
    console.log("Esperar")
    console.log("")
}
//chamando a função
atravessar()

//com argumento
function imprimir(i){
    console.log(i)
}

imprimir(5)
imprimir(7)

//retornando
function multiplica(i, j){
    return i*j
}

multiplica(7, 8)

let resultado = multiplica(5, 4)

//usando duas funções
imprimir(resultado)

function subtrai(a, b){
    imprimir(a-b)
}

subtrai(5, 2)