const starwarsContainer = document.querySelector(".starwars__produtos")
const consolesContainer = document.querySelector(".consoles__produtos")
const diversosContainer = document.querySelector(".diversos__produtos")
const larguraTela = window.screen.width
const estaLogado = window.location.href.split("?")[1]
let cabecalho__botaoLogin = document.querySelector(".cabecalho__botaoLogin")

const preencherContainer = (container, categoria) => {
    const cards = selecionarCategoria(categoria)
    if (estaLogado == "true"){
        cabecalho__botaoLogin.innerHTML = `
            <a href="menu_administrador.html"><button class="cabecalho__botaoLogin--botao botao__login">Adicionar Produto</button></a>
            `   
        if (larguraTela<1080){        
            for(let i = 0; i<4; i++){
                container.innerHTML += `
            <div class="card">
                <img src="${cards[i].img}" alt="imagem do produto" class="card__imgProduto">
                <h3 class="card__nomeProduto">${cards[i].nome}</h3>
                <h3 class="card__precoProduto">${cards[i].preco}</h3>
                <a target="_blank" class="card__linkProduto" href="produto.html?${cards[i].nome}">Ver produto</a>
                <div class="comandosAdm"><a href="editar.html?${cards[i].nome}" class="comandosAdm__link" id="editar">Editar</a><a href="excluir.html?${cards[i].nome}" class="comandosAdm__link" id="excluir" src="#">Excluir</a>
                </div>
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
                <div class="comandosAdm"><a href="editar.html?${cards[i].nome}" class="comandosAdm__link" id="editar">Editar</a><a href="excluir.html?${cards[i].nome}" class="comandosAdm__link" id="excluir" src="#">Excluir</a>
                </div>
            </div>`
            } 
        }
    }else{
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
}
