//comentário linha
/* comentário bloco*/

function testeVerificador() {
	var x = prompt("Digite um número: ");

	if(x > 10) {
     alert("� maior que 10!!!!");

 	} else{
 		alert("n�o � maior que 10!");
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


var y = parseInt(prompt(" Qual o n�mero?"));

switch(y) {
	case 0:
	alert("Y � o 0");
	break;

	case 1:
	alert("Y � o 1");
	break;

	case 2:
	alert("Y � o 2");
	break;

	case 3:
	alert("Y � o 3");
	break;

	case 4:
	alert("Y � o 4");
	break;
default:
alert("Ningu�m foi satisfeito");
break;
}


