var nome, ra, num1, num2, res; //Declarei as variáveis
nome="Vinicius Matheus G. De Souza"; //Defini o valor da varíavel nome
ra="2222100403"; //Defini o valor da variável ra
num1=prompt("Digite um número"); //Irá mostrar uma caixa de diálogo para capiturar e atribuir o valor na várial num1
num1=parseInt(num1); //Irá fazer a conversão do valor para número inteiro
num2=prompt("Digite outro número");
num2=parseInt(num2);
document.write("Nome do Aluno: ", "<b>" +nome, "</b>", "<br>", " RA: ", "<b>"+ra, "</b>", "<hr>"); //Irá exibir na tela os valores das varáveis nome e ra.
document.write("Números digitados <br>Primeiro número: ", "<b>" +num1, "</b>", "<br> Segundo número: ", "<b>" +num2, "</b>", "<hr>"); //Irá exibir na tela os valores das varáveis num1 e num2.
res=(num1>num2); //Irá comparar os valores das variáveis num1 e num2
document.write("Maior: ", "<b>" +res+"</b>", "<br>"); //Irá exibir na tela o resultado da comparação
res=(num1>=num2);
document.write("Maior ou Igual: ", "<b>" +res+"</b>", "<br>");
res=(num1<num2);
document.write("Menor: ", "<b>" +res+"</b>", "<br>");
res=(num1<=num2);
document.write("Menor ou Igual: ", "<b>" +res+"</b>", "<br>");
res=(num1==num2);
document.write("Igualdade: ", "<b>" +res+"</b>", "<br>");
res=(num1===num2);
document.write("Idêntico: ", "<b>" +res+"</b>", "<br>");
res=(num1!=num2);
document.write("Diferente: ", "<b>" +res+"</b>", " <br>");
res=(num1!==num2);
document.write("Valor não Igual ou Tipo não Igual: <b>" +res+ "<br>");