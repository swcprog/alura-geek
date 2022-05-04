const selecionarCategoria = (categoria) => {

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    console.log(produtos)
    let produtosCategoria = [];

    produtos.forEach( produto => {
        if (produto.categoria == categoria) { 
            produtosCategoria.push(produto)
        }
    });
    return produtosCategoria;
}