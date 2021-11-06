async function obterPersonagens() {
    const myHeaders = new Headers;

    const myInit = {
        method: "GET",
        headers: myHeaders,
    };

    const responseAdventureTime = await fetch("https://adventuretimeapi.herokuapp.com/people", myInit)
    const resultadoAdventureTime = await responseAdventureTime.json();

    const responseRickMorty = await fetch("https://rickandmortyapi.com/api/character", myInit)
    const resultadoRickMorty = await responseRickMorty.json(); // não retorna um array, e sim um objeto que tem 2 propriedades: info e results (dados do personagem)

    const nomesAdventureTime = resultadoAdventureTime.map((nome) => {
        return nome.name
    });
    // não consegue fazer map direto porque map é um método ESPECÍFICO DE ARRAYS
    // podemos puxar as propriedades utilizando dot notation, e por results se tratar de um array precisamos utilizar o map (se não usarmos) para obter os nomes (será retornado dentro de um array)
    const nomesRickMorty = resultadoRickMorty.results.map((nome) => {
        return nome.name;
    });

    const nomesPersonagem = [...nomesAdventureTime, ...nomesRickMorty];
    
    return document.getElementById("personagens").textContent = nomesPersonagem;
}