/*
Prompt vai capiturar o número que o usuário digitar.
O número será convertido para Inteiro(int)
Operação de Atribuição.
Primeira operação está somando a + b que o usuário digitou.
Segunda operação está Subtraindo(-5) o segundo número que o usuário digitou.
*/

var a, b;
a=prompt("Digite um número");
a=parseInt(a);
b=prompt("Digite outro número");
b=parseInt(b);
a+=b;
b-=5;
document.write("a = " + a);
document.write("<br>b = "+ b);