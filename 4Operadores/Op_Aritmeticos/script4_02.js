/* 
Prompt vai capiturar os números que o usuário vai colocar e armazenar na variável a e b.
Os números serão covertidos para inteiro(não fracionário)
Operação Aritmética soma e subtração dos números armazenados.
*/

var a,b;
a=prompt("Digite um número");
a=parseInt(a);
b=prompt("Digite outro número");
b=parseInt(b);
document.write ("soma: "+ (a+b));
document.write ("<br>subtração: "+ (a-b));
