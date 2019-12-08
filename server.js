// const colors = require('colors');
// const http = require('http');
// const server = http.createServer((req, res) => {
// res.setHeader('Content-Type', 'text/plain');
// res.write('Hello World-2');
// res.end();
// });
// const PORT = 8888;
// server.listen(PORT, () => console.log(`server running on port ${PORT}`.yellow.bold));

const http = require('http');
const PORT = 8888;
const url = require('url');

function begin(route, handle) {
  const server = http.createServer(function(req, res) {
    const pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} recieved.`.blue);
    res.writeHead(404, {
      'X-Powered-By': 'Node.js',
      'Content-Type': 'text/html'
    });
    const content = route(handle, pathname);
    res.writeHead(200);
    res.write(content)
    res.end(); 
  })
  
  server.listen(PORT, () => console.log(`server running on port ${PORT}`.yellow.bold));
}
exports.begin = begin;


