/*
Variável para capturar os Dados.
Entrada de Dados tipo (string) e conversão do tipo de dados para inteiro(int) e real(float)
operação aritmética(soma) com os dados armazenados.
Saída de dados e concatenação.
*/
var num3 = prompt("Digite um número");
num3 = parseInt(num3);
var num4 = prompt("Digite um número");
num4 = parseFloat(num4);
var resultado = num3 + num4;
document.write("resultado = "+resultado);