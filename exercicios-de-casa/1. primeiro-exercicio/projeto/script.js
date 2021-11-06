const header = document.querySelector("header");
const main = document.querySelector("main");
const title = document.createElement("h1");
title.innerText = "Minha deusa nem acredito que deu certo!!!!";
header.appendChild(title);
title.classList.add("header-titulo");

const card = document.createElement("article");
const titleCard = document.createElement("h2");
const body = document.createElement("p");

async function getInfos() {
    const myHeaders = new Headers();

    const myInit = {
        method: "GET",
        headers: myHeaders
    };

    try {
        
        const result = await fetch("https://jsonplaceholder.typicode.com/posts/", myInit);
        const response = await result.json();
        response.forEach(item => {
            const card = document.createElement("article");
            const titleCard = document.createElement("h2");
            const body = document.createElement("p");

            main.appendChild(card);
            card.appendChild(titleCard);
            card.appendChild(body);

            titleCard.innerText = item.title;
            body.innerText = item.body;

            card.classList.add("card");
            titleCard.classList.add("title-card");
            body.classList.add("body")
        })
        } catch (error) {
            console.log("Something is not working :(")
        }
    
}