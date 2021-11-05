async function getApi (){

   
    const myHeaders = new Headers;
    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/");

    const resultado = await resposta.json();
    //console.log(resultado)

    const container = document.getElementById("container");

    resultado.map((dado)=> {
         //console.log(dado.title)
        let card = document.createElement('div')
        let title= document.createElement('h2')
        let body = document.createElement('p')

        title.textContent = dado.title
        body.textContent = dado.body
        container.appendChild(card)
        card.appendChild(title)
        card.appendChild(body)

    
    })
     return resultado;

}

window.addEventListener('load', getApi)



