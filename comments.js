// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be in the same directory as the comments.js file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.html', (err, data) => {
        if (err) {
        res.writeHead(404);
        res.end('Not Found');
        } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
        }
    });
    });

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


// Path: comments.html
// Create an HTML file


