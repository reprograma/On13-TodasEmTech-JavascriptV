//import { default as axios } from "axios";

const imagem = document.querySelector("#image");

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((result) => {
        imagem.src = result.data.message
    })
    .catch((e) => {
        console.log(e)
    })