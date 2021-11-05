window.addEventListener("load", async function getAPI (event) {
    event.preventDefault();
    
    const myHeaders = new Headers;

    const myInit = {
        method: 'GET',
        Headers: myHeaders,

    };

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/");

    const resultado = await resposta.json();

    console.log(resultado);
})