matriz = []

matriz[0] = ["Enzo", "Valentina", "Joana", "Marcio"]
matriz[1] = [1,2,3,4]

console.log(matriz)

alunos = ["Enzo", "Valentina", "Joana", "Marcio", "Jose", "Paulo"]
notas = [[5.6, 7.2], [9.1, 8.4], [5.8, 4.6], [1.5, 8.5], [3.5, 6.5], [4.5, 9.5]]

for(num = 0; num < alunos.length; num++){
    alunoSelecionado = num
    
    nomeDoAluno = alunos[alunoSelecionado]
    notasDoAluno = notas[alunoSelecionado]

    nota1 = notasDoAluno[0]
    nota2 = notasDoAluno[1]

    mediaDoAluno = (nota1 + nota2)/ 2
    console.log(nomeDoAluno)
    console.log("A primeira nota foi: ", nota1)
    console.log("A segunda nota foi: ", nota2)
    console.log("Média: ", mediaDoAluno.toFixed(2))
    console.log("")
} 



/*
num = 1

while(num<=10){
    console.log('Hello World!')
    num++
}

num = 4

do {
    console.log('Hello!')
    num++
} while(num<=10)


for(num = 5; num <= 10; num++){
    console.log("World!")
}
*/

/*
Ex:
<script>
	for (i=0; i<= 10; i++) {
	document.write('Linha '+i);
}
</script>

<script>
var var1
while (var1 <= 10) {
	document.write('linha '+var1);
	var1++;
} 
</script>

<script>
while(i <= 10) {
	if (i == 3) {
	// O break interrompe a execução na terceira execução da
	// estrutura de repetição.		
		document.write('Linha ' + i + ' Fim do laço');	
		break;
	}
	document.write('Linha ' + i);
}	
</script>

<script>
while(i <= 10) {
	if (i == 3) {
	// O continue interrompe APENAS a terceira execução da
	// estrutura de repetição.		
		continue;
	}
	document.write('Linha ' + i);
}	
</script

*/