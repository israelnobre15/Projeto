var apesquisa;
function botao() {
	apesquisa = document.getElementById('pesquisa').value;
	window.open('http://localhost:3000/site/produto/listar/' + apesquisa);
}
