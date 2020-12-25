//Exercícios:

//1.
cincoPosicoes = [10, 30, 40, 20, 50]

let i = 0;
while(i < cincoPosicoes.length){
    console.log(cincoPosicoes[i])
    i++

}

//2.
arrayValores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
let soma = 0
for(let i = 0; i < arrayValores.length; i++){
    soma += arrayValores[i]
}
let media = soma/ arrayValores.length
console.log(media)

//3.
let nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

let nome = "Joseane"
let check = false

for(let i = 0; i < nomesComuns.length; i++){
    if(nomesComuns[i] == nome){
        check = true
        break
    }
}
if(check){
    console.log("É, nome comum :P")
} else {
    console.log("Diferentão, hein? XD")
}