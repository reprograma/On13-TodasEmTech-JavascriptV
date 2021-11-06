const pokemons = document.querySelector("#pokemon")

async function botaoPokemon() {
    const myHeaders = new Headers();

    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };
    try {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', myInit); //resposta da requisição
        const response = await result.json(); //resultado
        console.log(response.name);

        //console.log(response);

    } catch (error) {         //mais global
        console.log(error);
    } 

    /*fetch('https://pokeapi.co/api/v2/pokemon/ditto', myInit)
    .then((response) =>{
        return response.json(); resposta da requisição
    })
    .then((result) => {
        console.log(result)  resultado
    })
    .catch(error => console.log(error))*/
}
/*async -> vem no começo de uma função ou método. ele marca que dentro da função vai ser feita uma requisição assincrona que vai retornar uma promessa. (promessa algo que espera que acontece, que vai acontecer) chama a promise dentro da função. Sempre é com requisição assincrona, pois ele sempre espera uma promessa

Precisa mostrar pra função quando a promessa vai ser requisitada e onde, esse local vai ser marcado pelo await*/
