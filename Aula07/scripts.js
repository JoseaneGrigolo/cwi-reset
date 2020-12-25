matriz = []

matriz[0] = ["Enzo", "Valentina", "Joana", "Marcio"]
matriz[1] = [1,2,3,4]

console.log(matriz)

alunos = ["Enzo", "Valentina", "Joana", "Marcio"]
notas = [[5.6, 7.2], [9.1, 8.4], [5.8, 4.6], [1.5, 8.5]]

alunoSelecionado = 1

nomeDoAluno = alunos[alunoSelecionado]
notasDoAluno = notas[alunoSelecionado]

nota1 = notasDoAluno[0]
nota2 = notasDoAluno[1]

mediaDoAluno = (nota1 + nota2)/ 2

console.log(nomeDoAluno)
console.log("A primeira nota foi: ", nota1)
console.log("A segunda nota foi: ", nota2)
console.log("Média: ", mediaDoAluno)
