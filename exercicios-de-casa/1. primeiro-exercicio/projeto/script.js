window.addEventListener("load",  async function getAPI (event) {
    event.preventDefault()
    
    const myHeaders = new Headers;

    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/")
    
    const resultado = await resposta.json();

    const showData = document.getElementById("root")

    const mostrarTitulos = []

    resultado.map((dado) => {
        mostrarTitulos.push(dado.titulo)
    })

    console.log(resultado)
})