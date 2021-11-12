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

    const imagem = document.querySelector('#image');

    const nomesAdventureTime = resultadoAdventureTime.map((nome) => {
        return nome.name;
    });


    const nomesRickMorty = resultadoRickMorty.results.map((nome) =>{
        return nome.name;
    });

    const imagensRick = resultadoRickMorty.results.map((image) => {
    //     return image.image;
    
    // imagem.src = image.data.message;
    });

    const nomesPersonagens = [...nomesAdventureTime, ...nomesRickMorty];
    
    return document.getElementById("personagens").textContent = nomesPersonagens;

    let meuDocinho = {
        info: "brigadeiro",
        caracteristicas: {
            sabor: "ninho",
            granulado: true,
        },
    };

    console.log(meuDocinho)

}

