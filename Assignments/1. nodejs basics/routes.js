const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Assignment 1 - Node Basics</title></head>');
        response.write('<body><form action="/create-user" method="POST"><input type="text" name="username" /><button>Submit</button></form></body>');
        response.write('</html>');
        return response.end();
    }
    if (url === '/users') {
        response.write('<html>');
        response.write('<head><title>Assignment 1 - Node Basics</title></head>');
        response.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        response.write('</html>');
        return response.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            response.statusCode = 302;
            response.setHeader('Location', '/');
            return response.end();
        });
    }
};

module.exports.handler = requestHandler;