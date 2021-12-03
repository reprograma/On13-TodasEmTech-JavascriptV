/* Desafio: fetch com *async/await*

## Instruções para a realização do projeto:

Utilizando o método *async/await*, acesse à seguinte API: https://jsonplaceholder.typicode.com/posts/ e disponha no index.html todas as propriedades `title` e `body` em cards, seguindo o seguinte layout:

![card-title-example](../../assets/card-title-example.png)*/


async function getApi (){

    const myHeaders = new Headers();
    const myInit ={
        method: 'GET',
        headers: myHeaders,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/", myInit);
    const result = await response.json();
    console.log(result);

    let mySection = document.getElementById("section_id");

    result.map((data) =>{
        //console.log(data.title);

        let card = document.createElement('div')
        let title = document.createElement('h2')
        let body = document.createElement('p')

        title.innerText = data.title
        body.innerText = data.body
        mySection.appendChild(card);
        card.appendChild(title);
        card.appendChild(body);
    })
    return result;
}
window.addEventListener('load', getApi)

  





