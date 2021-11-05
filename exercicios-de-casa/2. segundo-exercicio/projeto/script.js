const img = document.querySelector(".img");

axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((results) => {
    img.src = results.data.message;
  })
  .catch((error) => {
    console.log(error);
  });
