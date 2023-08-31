// autorização para acessar a pagina 
window.alert("SEUS DADOS ESTÃO SEGUROS!! PAGINA CRIPITOGRAFADA")

var idade = Number(window.prompt("Qual sua idade"));
if (idade <= 17) {
  location.href = ('login.html')

}
else {
  window.alert(`pode acessar pois você tem, ${idade}, anos`)

}

var nome = String(window.prompt('Qual seu nome ?'));
window.confirm(`aproveite nossa pagina, ${nome} =)`)






