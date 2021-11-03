    async function obterPersonagens() {

        const myHeaders = new Headers;

        const myInit = {
            method: 'GET',
            headers: myHeaders,
        };

        const responseAdventureTime = await fetch("https://adventuretimeapi.herokuapp.com/people", myInit);
        const resultadoAdventureTime = await responseAdventureTime.json();

        const responseRickMorty = await fetch("https://rickandmortyapi.com/api/character", myInit);
        const resultadoRickMorty = await responseRickMorty.json();

        // console.log(resultadoAdventureTime,resultadoRickMorty)

        const nomesAdventureTime = resultadoAdventureTime.map((nome) => {
            return nome.name;
        });

        const nomesRickMorty = resultadoRickMorty.results.map((nome) => {
            return nome.name
        });

        const nomesPersonagens = [...nomesAdventureTime, ...nomesRickMorty];

        return document.getElementById("personagens").textContent = nomesPersonagens;
    }