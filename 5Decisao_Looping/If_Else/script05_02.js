/*
Declaramos duas variáveis
Os valores vão ser atribuidos pelo prompt que o usuário vai inserir o valor.
Iremos converter esse valor para número inteiro
A variável res irá receber o valor inserido pelo usuário e o resto da divisão.
Operação 
*/


var num, res;
num=prompt("Digite um número");
num=parseInt(num);
res=num%2;
if(res==0){
    document.write(num+ " - PAR");
}
else{
    document.write(num+" - ÍMPAR");
}