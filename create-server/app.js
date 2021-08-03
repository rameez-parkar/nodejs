const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url, request.method, request.headers);
    // process.exit();
    response.setHeader('Content-Type', 'text/html');
    response.write(`<html>
    <head>My First Node Page<head>
    <body><h1>Hello from node.js server</h1><body>
    </html>`);
    response.end();
});

server.listen(3000);