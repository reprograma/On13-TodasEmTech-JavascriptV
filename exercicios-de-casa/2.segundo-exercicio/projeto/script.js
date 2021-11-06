const imagem = document.getElementById("image")

axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((result) => {
    imagem.src = result.data.message;
    imagem.classList.add(".imagem")
  })
  .catch((error) => {
    error = "Something is not working";
    console.log(error);
  });
