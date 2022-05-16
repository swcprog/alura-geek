const nome = window.location.href.split("?")[1].replaceAll("%20", " ");
const produtosAtualizados = []
const btnExcluir = document.querySelector(".excluir_btn");
const produtos = JSON.parse(localStorage.getItem("produtos"))
const btnHome = document.querySelector(".home_btn")

btnExcluir.addEventListener("click", (event) => {
    event.preventDefault()
    produtos.forEach(produto => {
        if(nome === produto.nome){
            const index = produtos.indexOf(produto);
            produtos.splice(index,1);
            localStorage.setItem("produtos", JSON.stringify(produtos));
            alert("Produto excluido com sucesso")
            window.location.href = "index.html?true";
        }    
    });
    
})

btnHome.addEventListener("click", (event)=>{
    event.preventDefault
    window.location.assign("index.html?true")
})