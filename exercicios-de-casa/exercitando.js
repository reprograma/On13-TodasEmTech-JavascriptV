async function harryPotter () {
    const myHeaders = new Headers();

    const myInit = {
        method: "GET",
        headers: myHeaders
    };

    try {
        
        const result = await fetch("https://hp-api.herokuapp.com/api/characters/students", myInit);
        const response = await result.json();
        response.forEach(character => console.log(character.name))
        } catch (error) {
            console.log("Something is not working :(")
        }
}