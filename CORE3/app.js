// Creating a server

const http = require('http');
const port = 3001;
const hostname = '127.0.0.1';
const server = http.createServer(function(reqest, response) {
    response.statusCode = 200;
    response.end('I am working');
})

server.listen(port, hostname, () => {
    console.log(`Server runnign at http:// ${hostname}:${port}/`)
})


// const multi = require('./moduleOne');
// const multiply = require('./moduleOne');
// console.log(multiply);