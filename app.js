const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.post('/subscribe', (req, res) => {
    console.log('hey!');

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server started'));
