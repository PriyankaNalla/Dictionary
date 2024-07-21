const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '4dc5b2e5afmsh6336dcaa152c7cep1e5aebjsn5dd6e9e43222',
    'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
  }
};

fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=abandon', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));