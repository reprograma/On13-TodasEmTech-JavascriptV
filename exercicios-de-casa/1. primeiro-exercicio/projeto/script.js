window.addEventListener("load", async function getAPI (event) {
    event.preventDefault();

    const myHeaders = new Headers;

    const myInit = {
        method: 'GET',
        headers:'myHeaders',
    };
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/", myInit);

    const result = await response.json();
    
    //console.log(resultado);

    const showData = document.getElementById("root");
    let exibir = [];
    
    result.map((item) => {
        exibir.push.item.title;
    });

    showData.textContent = exibir;

    
})