// const {default: axios} = require("axios");

const imagem = document.querySelector('#image');

axios.get("https://dog.ceo/api/breeds/image/random")
.then((result) => {
    imagem.src = result.data.message //local da imagem pelo src que deu no site
})
.catch((error) => {
    console.log(error)
})