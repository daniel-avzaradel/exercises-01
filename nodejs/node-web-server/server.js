const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200);
    res.end(JSON.stringify({message: 'OK'}))
})

server.listen(5000, () => {
    console.log('Listening to port 5000');
})