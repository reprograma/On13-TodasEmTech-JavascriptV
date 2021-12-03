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



    
    //<script src="../node_modules/axios/dist/axios.min.js" type="text/javascript"></script>

   /* imagem.src = result.data.message;
    imagem.classList.add(".imagem")
  })
  .catch((error) => {
    error = "Try again and see the puppy";
    console.log(error);
  });*/



/*const cuteDogs = document.querySelector('#image_puppy');

axios.get("https://dog.ceo/api/breeds/image/random")
.then((result) =>{
    cuteDogs.src = result.data.message;
})
.catch((error) =>{
    console.log(error);
})*/ 