window.addEventListener('load', function(){
    
    async function getData (){
        const myHeaders = new Headers();

        const myInit = { 
            method: 'GET',
            headers: myHeaders,
        };

        const result = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const response = await result.json()

        response.forEach(( data ) => {

            const container = document.querySelector(".container");
            let card = document.createElement("div");
            card.setAttribute('class', 'card');
            let cardTitle = document.createElement("div");
            cardTitle.setAttribute('class', 'card-title');
            let cardBody = document.createElement("div");
            cardTitle.setAttribute('class', 'card-body');

            cardTitle.textContent = data.title;
            cardBody.textContent = data.body;
            
            container.appendChild(card);
            card.appendChild(cardTitle);
            card.appendChild(cardBody);
            
        });

        console.log(response)
    }

    getData()
    
})