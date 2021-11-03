    const pokemons = document.querySelector('#pokemon');

    async function botaoPokemon() { //async no começo da função signica que vai ser chamada uma função assincrona e vai chamar uma promise
        const myHeaders = new Headers();

        const myInit = {
            method: 'GET',
            headers: myHeaders,
        };


        try {
            const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/', myInit);

            const response = await result.json();

            console.log(response);

        } catch (error) {
            console.log(error);
        }

        /*fetch('https://pokeapi.co/api/v2/pokemon/ditto/', myInit)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result)
        })
        .catch (error => console.log(error))*/


    }