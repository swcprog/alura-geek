window.onload = carregarProdutos();
produtos = JSON.parse(localStorage.getItem("produtos"))
const container = document.querySelector(".produtos__inferior")

preencherContainer(container,"starwars")
preencherContainer(container,"consoles")
preencherContainer(container,"diversos")