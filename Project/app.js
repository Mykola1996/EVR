const express = require('express');

const app = express();


app.get('/', (req ,res) => {
    console.log(req);

    res.json('hello')
});

app.get('/users', (req, res) => {
    res.json('');
})


app.listen(5000, () => {
    console.log('app listen 5000')
})