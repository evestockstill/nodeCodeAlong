const colors = require('colors');
const http = require('http');
const server = http.createServer((req, res) => {
response.writeHead(200, { 'Content-Type': 'text/plain' });
response.write('<h1>Hello World</h1>');
response.end();
  
});
const PORT = 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`.yellow.bold));




// response.writeHead(200, { 'Content-Type': 'text/plain' });
// response.write('Hello World');
// response.end();