//comentário linha
/* comentário bloco*/

function testeVerificador() {
	var x = prompt("Digite um número: ");

	if(x > 10) {
     alert("É maior que 10!!!!");

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
for(x = 0; x < 30; x++){
	document.write("Numero:" + x + " <br/>");
}
	document.write("finalizando o for... <br/>");