var starwarshtml = document.querySelector(".starwars__produtos");
const larguraTela = window.screen.width;


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

]
}

if(larguraTela < 1080){
    for(let i=0;i<4;i++){
    starwarshtml.innerHTML +=`
    <div class="card">
        <img src="${cards.starwars[i].img}" alt="soldado" class="card__imgProduto">
        <h3 class="card__nomeProduto">${cards.starwars[i].nome}</h3>
        <h3 class="card__precoProduto">${cards.starwars[i].preco}</h3>
        <a class="card__linkProduto" href="${cards.starwars[i].link}">Ver produto</a>
    </div>
` 
}
}else{
    for(let i=0;i<6;i++){
        starwarshtml.innerHTML +=`
        <div class="card">
            <img src="${cards.starwars[i].img}" alt="soldado" class="card__imgProduto">
            <h3 class="card__nomeProduto">${cards.starwars[i].nome}</h3>
            <h3 class="card__precoProduto">${cards.starwars[i].preco}</h3>
            <a class="card__linkProduto" href="${cards.starwars[i].link}">Ver produto</a>
        </div>
    `   
}
}