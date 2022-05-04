let produtos = JSON.parse(localStorage.getItem("produtos")) || []
const produtosAntigos = [
    {   
        img: "./assets/img/produto1.svg",
        nome: "Caneca Storm Trooper",
        preco: "R$ 60,00",
        link: "google.com",
        descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
        categoria: "starwars"
        },
        {   
            img: "./assets/img/produto2.svg",
            nome: "Darth Vader",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "starwars",
        },
        {   
            img: "./assets/img/produto3.svg",
            nome: "Mestre Yoda",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "starwars",
        },
        {   
            img: "./assets/img/produto4.svg",
            nome: "Storm Trooper II",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "starwars",
        },
        {   
            img: "./assets/img/produto5.svg",
            nome: "Baby Yoda",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "starwars",
        },
        {   
            img: "./assets/img/produto6.svg",
            nome: "Lord Sith",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "starwars",
        },
        {
            img: "./assets/img/controle.svg",
            nome: "Controle XYZ",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "consoles",
        },
        {
            img: "./assets/img/controle_console.svg",
            nome: "Controle e console XYZ",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "consoles",
        },
        {
            img: "./assets/img/console_nitendo.svg",
            nome: "Console XYZ",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "consoles",
        },
        {
            img: "./assets/img/controle_nitendo.svg",
            nome: "Controle XYZ",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "consoles",
        },
        {
            img: "./assets/img/console2.svg",
            nome: "Console XYZ",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "consoles",
        },
        {
            img: "./assets/img/gameboy.svg",
            nome: "Gameboy Colorido",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "consoles",
        },
        {
            img: "./assets/img/camisa_atari.svg",
            nome: "Camisa Atari",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "diversos",
        },
        {
            img: "./assets/img/camisa_snes.svg",
            nome: "Camisa SNES",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "diversos",
        },
        {
            img: "./assets/img/sonic.svg",
            nome: "Sonic",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "diversos",
        },
        {
            img: "./assets/img/station.svg",
            nome: "Station",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "diversos",
        },
        {
            img: "./assets/img/camisa_hamburguer.svg",
            nome: "Camisa",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "diversos",
        },
        {
            img: "./assets/img/picachu.svg",
            nome: "Picachu",
            preco: "R$ 60,00",
            link: "google.com",
            descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
            categoria: "diversos",
    }
]

const carregarProdutos = () => {
    if ( produtos.length == 0){
        for (let i = 0; i < produtosAntigos.length; i++ ){
            produtos.push(produtosAntigos[i]);
        }     
        
    }
    localStorage.setItem("produtos", JSON.stringify(produtos));
}