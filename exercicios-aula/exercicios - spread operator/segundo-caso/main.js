async function obterPersonagens() {
    
    const myHeaders = new Headers;

    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };

    const responseAdventureTime = await fetch ("https://adventuretimeapi.herokuapp.com/people", myInit);
    const resultadoAdventureTime = await responseAdventureTime.json();

    const responseRickMorty = await fetch("", myInit);
    const resultadoRickMorty = await responseRickMorty.json();

    const nomesAdventureTime = resultadoAdventureTime.map((nome) => {
        return nome.nome;
    })

    const nomesRickMorty = resultadoRickMorty.results.map((nome)=> {
        return nome.nome;
    })

    const nomePersonagens = [...nomesAdventureTime, ...nomesRickMorty];

    return document.getElementById("personagens").textContent = nomePersonagens;
}