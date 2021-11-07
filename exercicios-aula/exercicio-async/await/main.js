const pokemons = document.querySelector("#pokemon");

function botaoPokemon() {
    const myHeader = new Headers();

    const myInit = {
        method: 'GET',
        headers: 'myHeaders',
    };
    
    try {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon/132', myInit);
        const response = await result.json();
        //console.log(response);
    }

        catch (error) {
        //console.log(error);
        }

        /*
        fetch('https://pokeapi.co/api/v2/pokemon/ditto/', myInit)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
        */    


