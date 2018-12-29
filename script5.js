//comentário linha
/* comentário bloco*/


function verificar() {

	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;

	if( n1 == n2 ){
		alert("Npumero igual, acertou");
	}else { 	
		alert("voce errou");
	}


} 

function resetar(){
	document.getElementById("n2").value = "";

	var r = Math.floor(Math.random() * 10000);
	document.getElementById("n1").innerHTML = r;
}