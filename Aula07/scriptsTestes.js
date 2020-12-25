
//DevMidia

//Acessando um Array completo
var carros = ["Saab", "Volvo", "BMW"];
//document.getElementById("demo").innerHTML = carros[0];
var carros = new Array("Saab", "Volvo", "BMW")

//Arrays são objetos
pessoa = [ "Carlos", "Silva", 46 ];
var pessoa = {primeiroNome:"Carlos", lastName:"Silva", age:46};

//Elementos do Array podem ser objetos
//myArray[0] = Date.now;
//myArray[1] = myFunction;
//varmyArray[2] = mycarros;

//Proriedade e Métodos do Array
var x = carros.length;   // n de elementos
var y = carros.sort();   // classifica os arrays

//Iterando sobre os itens de um array
var frutas, text, fLen, i;
frutas = ["Banana", "Laranja", "Maça", "Manga"];
fLen = frutas.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + frutas[i] + "</li>";
}

//Adicionando elementos a um Array
var frutas = ["Banana", "Laranja", "Maça", "Manga"];
frutas.push("Limão");
var frutas = ["Banana", "Laranja", "Maça", "Manga"];
frutas[frutas.length] = "Limão";  

//Arrays 
var points = [];   
var points = [40, 100, 1, 5, 25, 10];   
Array.isArray(points);

//Solucões para reconhecer um Array
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
points instanceof Array 
