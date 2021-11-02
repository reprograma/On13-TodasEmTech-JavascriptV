const res = document.querySelector(".res");
const bodyP = document.querySelector(".body");
const conteudo = [];

const req = fetch(`https://jsonplaceholder.typicode.com/posts/`)
  .then((response) => response.json())
  .then((item) => {
    item.forEach((elemento) => {
      conteudo.push(` <ul class="table-post">
        <li class="table-post--item">Title: ${elemento.title}</li> 
        <li class="table-post--item">Body: ${elemento.body}</li>
       <ul>                   `);
      res.innerHTML = conteudo.join("");
    });
  });
