const nome = window.location.href.split("?")[1].replaceAll("%20", " ");
var detalhes = document.querySelector(".detalhes");
var produtosSimilares = document.querySelector(".produtos__similares--cards");
const largura = window.screen.width;
const imagem = document.querySelector(".produtoAberto__imagem")
produtos = JSON.parse(localStorage.getItem("produtos"));

produtos.forEach(cards => {
    if(nome==cards.nome){
        detalhes.innerHTML =`
            <h1 class="detalhes__nome">${cards.nome}</h1>
            <h2 class="detalhes__preco">${cards.preco}</h2>
            <span class="detalhes__descricao">${cards.descricao}</span>
        `
        imagem.innerHTML = `
        <img src="${cards.img}" alt="imagem do produto">
        `
        
        preencherContainer(produtosSimilares,cards.categoria);

        return
    }

})