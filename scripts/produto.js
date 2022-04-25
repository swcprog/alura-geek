const cards = { 
    starwars:[
        {   
        img: "./assets/img/produto1.svg",
        nome: "Caneca Storm Trooper",
        preco: "R$ 60,00",
        link: "google.com",
        descricao: "Informações Técnicas:<br> Altura: 11cm <br>Comprimento: 12cm <br>Largura: 13cm <br>Peso: 58gr <br>Capacidade: 500ml <br>Material: Cerâmica.",
        grupo: "starwars"
        },
        {   
            img: "./assets/img/produto2.svg",
            nome: "Darth Vader",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {   
            img: "./assets/img/produto3.svg",
            nome: "Mestre Yoda",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {   
            img: "./assets/img/produto4.svg",
            nome: "Storm Trooper II",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {   
            img: "./assets/img/produto5.svg",
            nome: "Baby Yoda",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {   
            img: "./assets/img/produto6.svg",
            nome: "Lord Sith",
            preco: "R$ 60,00",
            link: "google.com",
        },
    ],
    consoles:[
        {
            img: "./assets/img/controle.svg",
            nome: "Controle XYZ",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/controle_console.svg",
            nome: "Controle e console XYZ",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/console_nitendo.svg",
            nome: "Console XYZ",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/controle_nitendo.svg",
            nome: "Controle XYZ",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/console2.svg",
            nome: "Console XYZ",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/gameboy.svg",
            nome: "Gameboy Colorido",
            preco: "R$ 60,00",
            link: "google.com",
        },
    ],
    diversos:[
        {
            img: "./assets/img/camisa_atari.svg",
            nome: "Camisa Atari",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/camisa_snes.svg",
            nome: "Camisa SNES",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/sonic.svg",
            nome: "Sonic",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/station.svg",
            nome: "Station",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/camisa_hamburguer.svg",
            nome: "Camisa",
            preco: "R$ 60,00",
            link: "google.com",
        },
        {
            img: "./assets/img/picachu.svg",
            nome: "Picachu",
            preco: "R$ 60,00",
            link: "google.com",
        },
    ]
}

var detalhes = document.querySelector(".detalhes");
var produtosSimilares = document.querySelector(".produtos__similares--cards");
const largura = window.screen.width;


detalhes.innerHTML =`
<h1 class="detalhes__nome">${cards.starwars[0].nome}</h1>
    <h2 class="detalhes__preco">${cards.starwars[0].preco}</h2>
    <span class="detalhes__descricao">${cards.starwars[0].descricao}</span>
`


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