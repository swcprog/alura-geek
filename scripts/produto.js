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
    }    
})




if (largura<1080){
for (let i = 1; i<5; i++){
    produtosSimilares.innerHTML+=`
        <div class="card produtos__card">
            <img src="${cards.starwars[i].img}" alt="imagem do produto" class="card__imgProduto">
            <h3 class="card__nomeProduto">${cards.starwars[i].nome}</h3>
            <h3 class="card__precoProduto">${cards.starwars[i].preco}</h3>
            <a class="card__linkProduto" href="#">Ver produto</a>
        </div>
        `
    }
}

if(largura>1000){
    for (let i = 0; i<6; i++){
        produtosSimilares.innerHTML+=`
            <div class="card produtos__card">
                <img src="${cards.starwars[i].img}" alt="imagem do produto" class="card__imgProduto">
                <h3 class="card__nomeProduto">${cards.starwars[i].nome}</h3>
                <h3 class="card__precoProduto">${cards.starwars[i].preco}</h3>
                <a class="card__linkProduto" href="#">Ver produto</a>
            </div>
            `
        }
    }