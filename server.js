const express = require('express')
var axios = require("axios");
const app = express()
const port=3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world ')
console.log(req.params);
const options = {
  method: 'GET',
  url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
  params: {word: 'ridiculous'},
  headers: {
    'x-rapidapi-key': '4dc5b2e5afmsh6336dcaa152c7cep1e5aebjsn5dd6e9e43222',
    'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
})

app.listen(port,()=>{
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})