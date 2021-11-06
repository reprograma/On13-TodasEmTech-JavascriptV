const { default: axios } = require("axios");
const doguinhos = document.querySelector("#imagem_doguinho");

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((resultado) => {
        doguinhos.src = resultado.data.message;
    })

.catch((error) => {
    console.log(error)
})