var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();

var aylien = require("aylien_textapi");

var textapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});


const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

app.post("/api_response", (req, res) => {
  const { url } = req.body;

  textapi.sentiment({ url }, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    res.json(data);
  });
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
