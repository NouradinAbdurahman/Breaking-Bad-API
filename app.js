const api = "https://www.breakingbadapi.com/api/characters/";
async function getData() {
    try{
        const response = await fetch(api);
        const data = await response.json();
        printData(data);
    }catch(e){
        console.log("Error:",e.message);
    }
}

function printData(data ) {
    const header = document.querySelector(".header");
    header.innerHTML += `
        <select class="select" onchange = "getCharacters(this.value)">
            <option>Please Select</option>
            ${data.map(characters => `<option>${characters.name}</option>`)}
        </select>
    `
}
async function getCharacters(name) {
    if (name != "Please Select") {
       const response = await fetch(`${api}?name=${name}`);
        const data = await response.json();
        console.log(data);
        const content = (document.querySelector(".content").innerHTML = `
            <h1 id="name">Name: ${data[0].name}</h1>
            <p id="nickname">Nickname: ${data[0].nickname}</p>
            <p id="category">Category: ${data[0].category}</p>
            <p id="occupation">Occupation: ${data[0].occupation}</p>
            <p id="birthday">Birthday: ${data[0].birthday}</p>
            <p id="status">Status: ${data[0].status}</p>
            <img id="image" src="${data[0].img}" alt="image">
        `);
    }
}
getData();