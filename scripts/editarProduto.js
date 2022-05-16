const nomeProduto = window.location.href.split("?")[1].replaceAll("%20", " ");
let inputImagem = document.querySelector("#imagem-produto");
const btnAtualizar = document.querySelector(".novoProduto__form--submit");
let nome = document.querySelector("#nome-produto");
let preco = document.querySelector("#preco-produto");
let descricao = document.querySelector("#descricao-produto");
let categoria = document.querySelector("#categoria-produto");


var urlImagem = null;

if (inputImagem) {
  inputImagem.addEventListener("change", (img) => {
    const reader = new FileReader();
    const arquivo = img.target.files.item(0);

    reader.readAsDataURL(arquivo);
    reader.addEventListener("load", () => {
      urlImagem = reader.result;
      console.log("imagem carregou!")
    });
  });
}

const produtos = JSON.parse(localStorage.getItem("produtos"));

produtos.forEach(produto=> {
  if(produto.nome === nomeProduto ){
    nome.value = produto.nome;
    preco.value = produto.preco;
    descricao.value = produto.descricao;
    categoria.value = produto.categoria;   
  } 
});



btnAtualizar.addEventListener("click",(event)=>{
    event.preventDefault();
    atualizarProdutos();
})



const atualizarProdutos = (()=> {
    produtos.forEach(produto => {
      if(produto.nome === nomeProduto){
        produto.nome = nome.value;
        produto.preco = preco.value;
        produto.descricao = descricao.value;
        produto.categoria = categoria.value;
      }

      if(urlImagem){
        produto.img = urlImagem;
      }
    })
  
    localStorage.setItem("produtos", JSON.stringify(produtos));
  
    alert("Produto Alterado");

    window.location.assign("index.html?true")
  
})