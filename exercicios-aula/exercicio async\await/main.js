/*const frutas = ['maçã', 'banana', 'pera', 'uva', 'kiwi'];

const legumes = ['quiabo', 'abóbora', 'cebola', 'cenoura', 'vagem'];

const feirinhaDeSabado = [...frutas, ...legumes];*/

const postContainer = document.getElementById('container-posts')

async function getAllCharacters() {
    const rickMortyData = await fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .catch(error => error);
    return rickMortyData;
}

async function getCharacters() {
    const allCharacter = await getAllCharacters();
    const acessCharacters = Object.entries(allCharacter)[1][1]
    acessCharacters.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
        <img class="img-post" src="${post.image}">
        <h1 class="author-post">${post.name}</h1> `;

    postContainer.appendChild(postElement)
    })
}
getCharacters()

