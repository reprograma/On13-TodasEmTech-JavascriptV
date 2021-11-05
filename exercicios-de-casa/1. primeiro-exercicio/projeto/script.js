const body = document.querySelector("#principal");
const cabecalho = document.querySelector("#header");
const conteudo = [];

const myHeaders = new Headers();

    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };

const requisicao = fetch(`https://jsonplaceholder.typicode.com/posts/`, myInit)
.then((response) => response.json())
.then((item) => {
    item.forEach(elemento => {
        conteudo.push(`<ul id="lista">
        <li id="lista__item">Title: ${elemento.title}</li>
        <li id="lista__item">Body: ${elemento.body}</li>
        </ul>`);
        header.innerHTML = conteudo.join("");
    });
});
