/*document.getElementById("div_geral").addEventListener("load", async function getAPI (event) {
    event.preventDefault();
    const myHeaders = new Headers;

    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const resultado = await resposta.json();
    //console.log(resultado);
})
*/ 


















/*window.addEventListener('load', function getAPI(event){
windows.addEventListener('load', aparecer)
    event.preventDefault();
    const myHeaders = new Headers;
    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };
})*/

//const divg = document.getElementById("div_geral");
//const divs = document.getElementById("div_sec");

async function getAPI (){

    const myHeaders = new Headers();
    const myInit ={
        method: 'GET',
        headers: myHeaders,
    };

    const resultado = await fetch("https://jsonplaceholder.typicode.com/posts/", myInit);
    const resposta = await resultado.json();
    //console.log(resposta);

    let div = document.getElementById("div_geral");

    resposta.map((dado) =>{
        //console.log(dado.title);
        let card = document.createElement('div')
        let title = document.createElement('h2')
        let body = document.createElement('p')

        title.innerText = dado.title
        body.innerText = dado.body
        div.appendChild(card);
        card.appendChild(title);
        card.appendChild(body);
    })
    return resposta;
}
window.addEventListener('load', getAPI)
/*
    const showData = document.getElementById("div_geral");

    let tituloAmostrar = [];
    resultado.map((dado) =>{
        tituloAmostrar = dado.title;
    });
    showData.textContent = tituloAmostrar;*/






























