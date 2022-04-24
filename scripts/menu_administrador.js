const largura = window.screen.width;
const botao = document.querySelector(".buscarImagem");
var adicionarImagem = document.querySelector(".novoProdutoSuperiorLeft");

const divAdicionarImagem = {
    tablet:[
        {
            img:"./assets/img/vector_adicionarImagem.svg",
            span:"Adicionar uma imagem para o produto",
        }
    ],
    desktop:[
        {
            img:"./assets/img/arraste_imagem.svg",
            span:"Arraste para adicionar uma imagem para o produto",
        }
    ]

}

if(largura>=1080){
    botao.innerHTML = "Procure no seu computador";
    adicionarImagem.innerHTML =`
    <h1 class="novoProduto__title">Adicionar Novo Produto</h1>
                    <div class="novoProduto__adicionarImagem">
                    	<img src="${divAdicionarImagem.desktop[0].img}">
                    	<span class="novoProduto__adicionarImagem--texto">${divAdicionarImagem.desktop[0].span}</span>	
                    </div>
    `;
}
if(largura >=768 && largura<1080){
    botao.innerHTML = "Procure no seu tablet";
    adicionarImagem.innerHTML =`
    <h1 class="novoProduto__title">Adicionar Novo Produto</h1>
                    <div class="novoProduto__adicionarImagem">
                    	<img src="${divAdicionarImagem.desktop[0].img}">
                    	<span class="novoProduto__adicionarImagem--texto">${divAdicionarImagem.tablet[0].span}</span>	
                    </div>
    `;
}