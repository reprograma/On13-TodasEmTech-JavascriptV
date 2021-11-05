const infoTitle = document.getElementById('title');
const infoBody = document.getElementById('body');

const mainTitle = [];
const mainBody = [];


window.addEventListener('load', async function infoGet(event) {
    event.preventDefault();
    
    const myHeaders = new Headers;
    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };

    const result = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await result.json();

   console.log(data)

   data.map((info) => {
        mainTitle.push(info.title)
       mainBody.push(info.body)
    })


infoTitle.textContent = mainTitle;
infoBody.textContent = mainBody;
})

// let text ="";

// for(let i = 0; i <= 10, i++;) {
//     text =text + i +"<br/>"
// }

// document.getElementById("titulo").innerHTML = text