const postContainer = document.getElementById('container-posts')

async function articles() {
    const cards = await fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .catch(error => error);
    return cards;
}

async function getCards() {
    const card = await articles();
    card.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
        <h1>${post.title}</h1>
        <p class="author-post">${post.body}</p> `;

    postContainer.appendChild(postElement)
    })
}
getCards()