var nome, ra, num1, num2, res; //Declarei as variáveis
nome="Vinicius Matheus G. De Souza"; //Defini o valor da varíavel nome
ra="2222100403"; //Defini o valor da variável ra
num1=prompt("Digite um número"); //Irá mostrar uma caixa de diálogo para capiturar e atribuir o valor na várial num1
num1=parseInt(num1); //Irá fazer a conversão do valor para número inteiro
num2=prompt("Digite outro número"); //Irá mostrar uma caixa de diálogo para capiturar e atribuir o valor na várial num2
num2=parseInt(num2); //Irá fazer a conversão do valor para número inteiro
document.write("Nome do Aluno: " +nome, "<br>", " RA: " +ra, "<hr>"); //Irá exibir na tela os valores das varáveis nome e ra.
document.write("Números digitados <br>Primeiro número: " +num1, "<br> Segundo número: " +num2, "<hr>"); //Irá exibir na tela os valores das varáveis num1 e num2.
res=(num1==num2); //Irá comparar os valores das variáveis num1 e num2
document.write("Igualdade: " +res+ "<br>"); //Irá exibir na tela o resultado da comparação
res=(num1===num2); //Irá comparar os valores das variáveis num1 e num2
document.write("Idêntico: " +res+ "<br>"); //Irá exibir na tela o resultado da comparação