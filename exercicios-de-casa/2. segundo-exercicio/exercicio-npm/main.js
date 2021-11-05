//const { default: axios } = require("axios");

const imagem = document.querySelector('#image');

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((result) => {
        imagem.src = result.data.message;
        console.log(result)
    })
    .catch((error) => {
        console.log(console.error);
    })
