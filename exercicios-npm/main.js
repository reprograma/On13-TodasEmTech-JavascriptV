

    const imagem = document.querySelector("#img");

axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((results) => {
    imagem.src = results.data.message;
    console.log(results)
  })
  .catch((error) => {
    console.log(error);
  });