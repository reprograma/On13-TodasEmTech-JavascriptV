window.addEventListener('load', async function infoGet(event) {
    event.preventDefault();

    const myHeaders = new Headers;
    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };

    const result = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await result.json();

    console.log(data);

    data.forEach((element) => {

        let card = document.createElement('div');
        let cardTitle = document.createElement('div');
        let cardBody = document.createElement('div');
        card.setAttribute('class', 'cards');
        cardTitle.setAttribute('class', 'card__title');
        cardBody.setAttribute('class', 'card__body');

        cardTitle.textContent = element.title;
        cardBody.textContent = element.body;
        console.log(cardTitle)
        console.log(cardBody)
        const mainContainer = document.getElementById('container');
        mainContainer.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
    });


})