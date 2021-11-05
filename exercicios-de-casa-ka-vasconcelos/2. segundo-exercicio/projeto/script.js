const imagem = document.querySelector('#image');

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((result) => {
        console.log(result);
        imagem.src = result.data.message;
    })
    .catch((err) => {
        console.log(err);
    })