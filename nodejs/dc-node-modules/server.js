const exp = require('express');
const app = exp();
const bp = require('body-parser')

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'daniel88',
        database: 'test01',
        port: '5432'
    }
})

app.set('db', db)

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());
app.use(exp.json())


app.get('/', (req, res) => {
    res.send('Home page')
})

app.put('/user/:id', (req, res) => {
    db('users')
    .where({id: 12})
    .update({email: `${req.body.email}`})
    .then()
})

app.post('/user', (req, res) => {
    db('users')
    .insert({
        first_name: `${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        email: `${req.body.email}`,
        age: `${req.body.age}`
    })
    .then(console.table(req.body))
    res.status(201).send(req.body)
})

app.get('/user/:id', (req, res) => {
    db
    .select('*').from('users')
    .where({id: `${req.params.id}`})
    .then(data => {
        res.send(data)
    })
})

app.listen(5000, () => {
    console.log('listening');
})