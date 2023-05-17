var data = new Date();
var ano = data.getFullYear();

// Comentado para não interferir na execução
/*
for (i = 0; i < 3; i++) {
  var nome = prompt('Qual o nome do ' + (i+1) + 'º?');
  var anoNascimento = prompt('Que ano você nasceu, ' + nome + '? ');

  idade = ano - anoNascimento;

  alert('Idade do ' + nome + ': ' + idade);
}
*/

alert('Agora vamos usar outro método para saber quem é o mais velho.');

var ano1 = document.body.innerHTML = "<h1>Que ano o 1º nasceu?</h1>";
var ano2 = document.body.innerHTML = "<h2>Que ano o 2º nasceu?</h2>";
var ano3 = document.body.innerHTML = "<h3>Que ano o 3º nasceu?</h3>";

if(ano1 < ano2 && ano1 < ano3){
    idade = ano - ano1;
    alert('A 1ª pessoa é a mais velha. Ela tem ' + idade + ' anos.');
}
else if(ano2 < ano1 && ano2 < ano3){
    idade = ano - ano2;
    alert('A 2ª pessoa é a mais velha. Ela tem ' + idade + ' anos.');
}
else if(ano3 < ano2 && ano3 < ano1){
    idade = ano - ano3;
    alert('A 3ª pessoa é a mais velha. Ela tem ' + idade + ' anos.');
}
else if(ano1 == ano2 && ano1 == ano3){
    idade = ano - ano1;
    alert('As três pessoas possuem a mesma idade. Elas têm ' + idade + ' anos.');
}
else{
    alert('Entradas inválidas');
}