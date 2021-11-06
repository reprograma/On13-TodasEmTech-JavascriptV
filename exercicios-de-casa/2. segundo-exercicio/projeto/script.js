const imagem = document.getElementById('img')

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((resultado) => {
        imagem.src = resultado.data.mensagem; 
    })

    .catch((erro) => {
        console.log(erro)
    })