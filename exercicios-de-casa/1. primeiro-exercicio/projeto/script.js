    // window.addEventListener("load", async function getAPI (event) {
    //     event.preventDefault();

    //     const myHeaders = new Headers;

    //     const myInit = {
    //         method: 'GET',
    //         headers: myHeaders,
    //     };

    //     const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/")

    //     const resultado = await resposta.json();

    //     const showData = document.getElementById("root")

    //     const titulosAMostrar = [];

    //     resultado.map((dado) => {
    //         titulosAMostrar.push(dado.title);
    //     });

    //     showData.textContent = titulosAMostrar;
    // })


    async function getCardsAPI() {

        const myHeaders = new Headers();

        const myInit = {
            method: 'GET',
            headers: myHeaders,
        };


        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts/', myInit);

            const response = await result.json();

            const card = document.getElementById('cards');

            response.map((item) => {
                /*
                <div class="card">
                <div class="container">
                    <h4 id="title"><b>John Doe</b></h4> 
                    <p id="body">Architect & Engineer</p> 
                </div>

                 referência: https://www.w3schools.com/howto/howto_css_cards.asp
                */

                //criado a div Card
                const divCard = document.createElement('div');
                divCard.className = 'card';

                // criando a div container
                const innerDivContainer = document.createElement('div');
                innerDivContainer.className = 'container';

                //criando h4
                const subTitulo = document.createElement('h4');
                subTitulo.className = 'subtitulo';
                subTitulo.setAttribute("style", "bold");
                let tituloH = document.createTextNode(item.title);
                subTitulo.appendChild(tituloH)
                innerDivContainer.appendChild(subTitulo);

                //criando paragrafo
                const paragrafo = document.createElement('p');
                paragrafo.className = 'paragrafo';
                let bodyP = document.createTextNode(item.body);
                paragrafo.appendChild(bodyP);
                innerDivContainer.appendChild(paragrafo);

                //Adicionando container ao card
                divCard.appendChild(innerDivContainer);
                card.appendChild(divCard);
            })


        } catch (error) {
            console.log(error);
        }
    }

   