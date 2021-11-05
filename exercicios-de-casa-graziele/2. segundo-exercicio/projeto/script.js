
const image = document.querySelector("#img");

axios.get("https://dog.ceo/api/breeds/image/random")
  .then((result) => {
    image.src = result.data.message;
    console.log(result)
  })
  .catch((error) => {
    console.log(error);
  });