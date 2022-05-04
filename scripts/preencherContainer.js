const starwarsContainer = document.querySelector(".starwars__produtos")
const consolesContainer = document.querySelector(".consoles__produtos")
const diversosContainer = document.querySelector(".diversos__produtos")
const larguraTela = window.screen.width

const preencherContainer = (container, categoria) => {
    const cards = selecionarCategoria(categoria)
    if (larguraTela<1080){
        for(let i = 0; i<4; i++){
            container.innerHTML += `
        <div class="card">
            <img src="${cards[i].img}" alt="imagem do produto" class="card__imgProduto">
            <h3 class="card__nomeProduto">${cards[i].nome}</h3>
            <h3 class="card__precoProduto">${cards[i].preco}</h3>
            <a target="_blank" class="card__linkProduto" href="produto.html?${cards[i].nome}">Ver produto</a>
        </div>`
        }
    }else{
        for(let i = 0; i<cards.length; i++){
            container.innerHTML += `
        <div class="card">
            <img src="${cards[i].img}" alt="imagem do produto" class="card__imgProduto">
            <h3 class="card__nomeProduto">${cards[i].nome}</h3>
            <h3 class="card__precoProduto">${cards[i].preco}</h3>
            <a target="_blank" class="card__linkProduto" href="produto.html?${cards[i].nome}">Ver produto</a>
        </div>`
        } 
    }
}