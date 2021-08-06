const fs = require('fs');

function requestHandler(request, response) {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button>Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });           
        });      
    }
    response.setHeader('Content-Type', 'text/html');
    response.write(`<html>
    <head>My First Node Page<head>
    <body><h1>Hello from node.js server</h1><body>
    </html>`);
    response.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';