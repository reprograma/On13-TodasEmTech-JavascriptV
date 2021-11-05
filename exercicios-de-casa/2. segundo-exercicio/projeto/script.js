const imagem = document.querySelector('#image');

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((result) => {
        imagem.src = result.message;

    })
    .catch((error) => {
        console.log(error);
    })