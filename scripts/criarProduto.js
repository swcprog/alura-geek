let inputImagem = document.querySelector("#imagem-produto");
var urlImagem;
const btnAdicionar = document.querySelector(".novoProduto__form--submit");
if (inputImagem) {
  inputImagem.addEventListener("change", (img) => {
    const reader = new FileReader();
    const arquivo = img.target.files.item(0);

    reader.readAsDataURL(arquivo);
    reader.addEventListener("load", () => {
      urlImagem = reader.result;
      console.log("imagem carregou!")
      console.log(urlImagem)
    });
  });
}

btnAdicionar.addEventListener("click",(event)=>{
   // event.preventDefault();
    criaProduto();
})



const criaProduto = (()=> {
    const produtos = JSON.parse(localStorage.getItem("produtos"));
    console.log("produtos")
    let nome = document.querySelector("#nome-produto");
    let preco = document.querySelector("#preco-produto");
    let descricao = document.querySelector("#descricao-produto");
    let categoria = document.querySelector("#categoria-produto");
    let imagem = urlImagem;

    const novoProduto = {
        img: imagem,
        nome: nome.value,
        preco: `R$ ${preco.value}`,
        categoria: categoria.value,
        descricao: descricao.value
    }

    dadosAtualizados = [...produtos, novoProduto];

    localStorage.setItem("produtos", JSON.stringify(dadosAtualizados));
  
    alert("Produto Cadastrado");
    window.location.assign("index.html?true")


    nome.value = "";
    preco.value = "";
    descricao.value = "";
    categoria.value = "";
    inputImagem.value = null;
})