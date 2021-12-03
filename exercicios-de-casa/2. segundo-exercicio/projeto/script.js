/*# Desafio: fetch com *axios* - DogsAPI

## Instruções para a realização do projeto:

1. Utilizando o método `.fetch()`, e da biblioteca **axios**, na página index.html, acesse à seguinte API: https://dog.ceo/api/breeds/image/random e traga na página a imagem contida na resposta da requisição.*/

    const imagem = document.querySelector('#image');


    axios.get("https://dog.ceo/api/breeds/image/random")
        .then((result) => {
            imagem.src = result.data.message;
            console.log(result)
        })
        .catch((error) => {
            console.log(error);
        })



    

