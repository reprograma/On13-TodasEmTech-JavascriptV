let oi = "oi"
console.log(oi);

window.addEventListener('load', async(event) => {
    event.preventDefault();

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        let result = await response.json()
            //console.log(result);

        let titulo = result.map((data) => {
            return data.title;
        })
        let id = result.map((data) => {
            return data.id;
        })
        let corpo = result.map((data) => {
            return data.body;
        })


        for (let a = 0; a < 100; a++) {
            let tituloLoop = titulo[a];
            console.log(tituloLoop);
            //document.getElementById("title").innerHTML = titulo[a];
            let bodyLoop = corpo[a];
            console.log(bodyLoop);
            //document.getElementById("title").innerHTML = corpo[a];
            let resultadoFinal = `<strong>${tituloLoop}</strong><br><br>${bodyLoop}<br><br>`;
            document.getElementById("title").innerHTML += resultadoFinal;
        }

    } catch (error) {
        console.log(error);
    }
});