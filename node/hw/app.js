const express = require('express');
const users = require('./dataBase/index.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    console.log('req');
    res.json('hello')
})
app.get('/users', (req, res) => {
    res.json(users)
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;

    if (Number.isNaN(+userId) || +userId < 0) {
        res.status(400).json('wrong user id');
        return;
    }
    const user = users[userId];
    if (!user) {
        res.status(404).json('user not found');
        return;
    }
    res.json(user);
});

app.post('/users', (req, res) => {
   const {age, name} = req.body;
    console.log(age, 'age');
    console.log(name, 'name');
    if (Number.isNaN(+age) || age <= 0){
        res.status(400).json('wrong age');
        return;
    }
    users.push({ name, age})

    res.status(201).json('ok')
});

app.delete('/users/:usersById', (req, res) => {
    res.json(users)
})


app.listen(5000, () => {
    console.log('App listen 5000')
});