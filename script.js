const input = document.getElementById("searchButton");
const searchBtn = document.getElementById("search");
const wordAppear = document.getElementById("wordHere");
const meaning = document.getElementById("meaning");

const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4dc5b2e5afmsh6336dcaa152c7cep1e5aebjsn5dd6e9e43222',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        wordAppear.innerHTML = `Word: ${word}`;
        if (response.definition) {
            let definitions = response.definition.split(';').map((def, index) => `${index + 1}. ${def}<br>`).join('');
            meaning.innerHTML = `Meaning:<br> ${definitions}`;
        } else {
            meaning.innerHTML = `Meaning: No definition found`;
        }
    })
    .catch(err => console.error(err));
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(input.value);
   
});

document.addEventListener("DOMContentLoaded", () => {
    input.value = '';
});