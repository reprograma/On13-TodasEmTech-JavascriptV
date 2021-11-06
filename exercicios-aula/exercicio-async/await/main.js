const pokemons = document.querySelector("#pokemon");

async function botaoPokemon() {
    const myHeaders = new Headers();

    const myInit = {
        method: "GET",
        headers: myHeaders,
    };

    try {
        
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/", myInit); // requisição assíncrona que vai retornar uma promessa - que será cumprida em algum momento
    const response = await result.json(); // retorno de uma promessa - precisa marcar com o retorno específico, nesse caso await
    console.log(response.name);
    } catch (e) {
        console.log(e)
    }

    // fetch("https://pokeapi.co/api/v2/pokemon/ditto/", myInit)
    //     .then((response) => { // espera o retorno da resposta da requisição
    //         return response.json();
    //     })
    //     .then((result) => { // espera o retorno do resultado da resposta da requisição
    //         console.log(result)
    //     })
    //     .catch(e => console.log(e))

    // then é um método que chama uma função - é uma callback
    //async significa que dentro da função será executada uma chamada assíncrona - uma promise
    // uma async SEMPRE ESPERA UMA PROMESSA
    // o await é o retorno da promessa
    // o método fetch precisa da url, de um end point e do que está no myInit (tipo de método, headers)
}