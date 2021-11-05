function obterPersonagens() {
    const myHeaders = new Headers;

    const myInit = {
        method: 'GET',
        Headers: myHeaders;
    };
    const responseAdventureTime = await fetch ("https://adventuretimeapi.herokuapp.com/people", myInit);
    const resultadoAdventureTime = await responseAdventureTime.json();

    const responseRickMorty = await
    
}