const exp = require('express');
const app = exp();
const bp = require('body-parser');
const db = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        database: 'test01',
        password: 'daniel88'
    }
})

app.set('db', db)

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
app.use(exp.json());

app.get('/users', (req, res) => {
    db
    .select('*').from('users')
    .then(data => {
        console.table(data);
        res.status(200).send(data)
    })
})

app.get('/user/:id', (req, res) => {
    db
    .select('*').from('users')
    .where({id: `${req.params.id}`})
    .then(data => {
        console.table(data);
        res.status(200).send(data)
    })
})

app.post('/register', (req, res) => {
    db('users')
    .insert({
        first_name: `${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        email: `${req.body.email}`,
        age: `${req.body.age}`
    })
    .then(console.table(JSON.parse(JSON.stringify(req.body))));
    res.status(201).send(req.body)
})

app.put('/edit/:id', (req, res) => {

    let user = {};
    db
    .select('*').from('users')
    .where({id: `${req.params.id}`})
    .then(data => {
        user = data;
    })

    db('users')
    .where({id: `${req.params.id}`})
    .update({
        first_name: `${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        email: `${req.body.email}`,
        age: `${req.body.age}`
    })
    .then()
    res.send(req.body)
})

app.delete('/delete/:id', (req, res) => {
    db('users')
    .where({id: `${req.params.id}`})
    .del()
    .then(console.log(`user id: ${req.params.id} was removed.`))
    res.send({message: `user id: ${req.params.id} was removed.`})
})

app.listen(5000, () => {
    console.log('listening to port 5000');
})