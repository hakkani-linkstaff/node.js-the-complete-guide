const http = require('http')

// function rqServer(req, res) {
//     console.log(req)
// }

// const server = http.createServer(rqServer)
// const server = http.createServer(function(req, res) {
//     console.log(req)
// })

const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(3000)