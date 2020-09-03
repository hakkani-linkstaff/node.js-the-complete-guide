const http = require("http");

const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In the middleware!')
    next() // Allows the request to continue to the next middle in line
})

app.use((req, res, next) => {
    console.log('In Another middleware!')
    // ...
})

const server = http.createServer(app);

server.listen(3000);
