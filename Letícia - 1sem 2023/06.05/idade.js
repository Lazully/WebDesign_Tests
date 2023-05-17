var data = new Date();
var ano = data.getFullYear();

var nome = prompt('Digite seu nome: ');
var anoNascimento = prompt('Digite o ano que você nasceu: ');

var idade = ano - anoNascimento;

document.body.innerHTML = "<h1>Nome: " + nome + "</h1>";
document.body.innerHTML = "<h2>Idade: " + idade + "</h2>";
document.body.innerHTML = "<h1>Hora certa: " + time.getHours(2) + ":" + time.getMinutes(2) + ":" + time.getSeconds(2) + "</h1>";
