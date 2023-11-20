// this is to import the 'http' module to create a server
const http = require('http');

// I created a server using the http module
const server = http.createServer((request, response) => {
  // I set the response header to indicate that I am sending a HTML content
    
    response.writeHead(200, { 'Content-Type': 'text/html' });

    // This is to end a response to the client (browser)
    
    response.end('<h1>Hello Node!!!!</h1>\n');
    });

    // This is to start the server and make it listen on port 3000

    server.listen(3000, () => {
    // This code block will run when the server starts successfully
    console.log('Server is running on http://localhost:3000');
});
