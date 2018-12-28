//comentário linha
/* comentário bloco*/

function adicionarIngrediente(){
	var ing = document.getElementById("ingrediente").value;

	var listahtml = document.getElementById("lista").innerHTML;

	listahtml = listahtml + "<li>" + ing + "</li>";

	document.getElementById("lista").innerHTML = listahtml;
}



