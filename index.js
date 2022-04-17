const express = require('express');
const axios = require('axios');

const app = express();


app.route('/').get( (req, res) => {

    axios.get('https://api.github.com/users/hevelyn')
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
});


app.route('/img').get( (req, res) => {

    axios.get('https://api.github.com/users/hevelyn')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
});


app.listen('3000');