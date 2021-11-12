window.addEventListener('load', function(){

    async function getData (){
        const myHeaders = new Headers();

        const myInit = { 
            method: 'GET',
            headers: myHeaders,
        };

        const resultAPI = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const responseAPI = await resultAPI.json()

        responseAPI.forEach((data) => {

            const container = document.querySelector(".container");
            const card = document.createElement("div");
            card.setAttribute("class", "card");
            const cardTitle = document.createElement("div");
            cardTitle.setAttribute("class", "card-title");
            const cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");

            cardTitle.textContent = data.title;
            cardBody.textContent = data.body;

            container.appendChild(card);
            card.appendChild(cardTitle);
            card.appendChild(cardBody);

        });

        console.log(responseAPI)
    }

    getData()

})