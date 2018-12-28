//comentário linha
/* comentário bloco*/

function trocarDiv(nome){
 	var area = document.getElementById("area");
 	var texto = prompt("Qual o seu sobre nome?");

 	area.innerHTML = nome+ " " + texto;
}


