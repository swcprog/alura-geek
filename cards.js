var starwarshtml = document.querySelector(".starwars__produtos");
var consoleshtml = document.querySelector(".consoles__produtos");
var diversoshtml = document.querySelector(".diversos__produtos");
const larguraTela = window.screen.width;
console.log(larguraTela)


const cards = { 
    starwars:[
        {   
        img: "./assets/img/produto1.svg",
        nome: "Storm Trooper",
        preco: "R$ 60,00",
        link: "google.com",
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

if(larguraTela < 1080){
    for(let i=0;i<4;i++){
    starwarshtml.innerHTML +=`
    <div class="card">
        <img src="${cards.starwars[i].img}" alt="imagem do produto" class="card__imgProduto">
        <h3 class="card__nomeProduto">${cards.starwars[i].nome}</h3>
        <h3 class="card__precoProduto">${cards.starwars[i].preco}</h3>
        <a class="card__linkProduto" href="${cards.starwars[i].link}">Ver produto</a>
    </div>
`   
    consoleshtml.innerHTML += `
    <div class="card">
        <img src="${cards.consoles[i].img}" alt="imagem do produto" class="card__imgProduto">
        <h3 class="card__nomeProduto">${cards.consoles[i].nome}</h3>
        <h3 class="card__precoProduto">${cards.consoles[i].preco}</h3>
        <a class="card__linkProduto" href="${cards.consoles[i].link}">Ver produto</a>
    </div>
    `
    diversoshtml.innerHTML += `
    <div class="card">
        <img src="${cards.diversos[i].img}" alt="imagem do produto" class="card__imgProduto">
        <h3 class="card__nomeProduto">${cards.diversos[i].nome}</h3>
        <h3 class="card__precoProduto">${cards.diversos[i].preco}</h3>
        <a class="card__linkProduto" href="${cards.diversos[i].link}">Ver produto</a>
    </div>
    `
}
}else{
    for(let i=0;i<6;i++){
        starwarshtml.innerHTML +=`
        <div class="card">
            <img src="${cards.starwars[i].img}" alt="imagem do produto" class="card__imgProduto">
            <h3 class="card__nomeProduto">${cards.starwars[i].nome}</h3>
            <h3 class="card__precoProduto">${cards.starwars[i].preco}</h3>
            <a class="card__linkProduto" href="${cards.starwars[i].link}">Ver produto</a>
        </div>
    `   
        consoleshtml.innerHTML += `
        <div class="card">
            <img src="${cards.consoles[i].img}" alt="imagem do produto" class="card__imgProduto">
            <h3 class="card__nomeProduto">${cards.consoles[i].nome}</h3>
            <h3 class="card__precoProduto">${cards.consoles[i].preco}</h3>
            <a class="card__linkProduto" href="${cards.consoles[i].link}">Ver produto</a>
        </div>
    `
        diversoshtml.innerHTML += `
        <div class="card">
            <img src="${cards.diversos[i].img}" alt="imagem do produto" class="card__imgProduto">
            <h3 class="card__nomeProduto">${cards.diversos[i].nome}</h3>
            <h3 class="card__precoProduto">${cards.diversos[i].preco}</h3>
            <a class="card__linkProduto" href="${cards.diversos[i].link}">Ver produto</a>
        </div>
    `
}
}