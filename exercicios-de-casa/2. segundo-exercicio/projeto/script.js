const imagem = document.querySelector("#root");

axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((results) => {
    imagem.src = results.data.message;
    console.log(results)
  })
  .catch((error) => {
    console.log(error);
  });