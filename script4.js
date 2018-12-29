//comentÃ¡rio linha
/* comentÃ¡rio bloco*/

function testeVerificador() {
	var x = prompt("Digite um nÃºmero: ");

	if(x > 10) {
     alert("é maior que 10!!!!");

 	} else{
 		alert("não é maior que 10!");
 	}
 }
	
//

var x = 0;
	document.write("Iniciando o loop while... <br/>");


while(x < 10) {

	document.write("numero:" + x +" <br/>");
	x++;
}
	document.write("finalizando o loop while" + "<br/>" + "<br/>" + "<br/>");

//

	document.write("Iniciando for... <br/>");
for(x = 0; x < 5; x++){
	document.write("Numero:" + x + " <br/>");
}
	document.write("finalizando o for... <br/>");


var y = parseInt(prompt(" Qual o número?"));

switch(y) {
	case 0:
	alert("Y é o 0");
	break;

	case 1:
	alert("Y é o 1");
	break;

	case 2:
	alert("Y é o 2");
	break;

	case 3:
	alert("Y é o 3");
	break;

	case 4:
	alert("Y é o 4");
	break;
default:
alert("Ninguém foi satisfeito");
break;
}


