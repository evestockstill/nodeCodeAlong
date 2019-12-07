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

function start(route) {
  function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} recieved.`.blue);
    route(pathname);
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World-4');
    res.end(); 
  }
  http.createServer(onRequest).listen(8888);
  console.log(`server running on port ${PORT}`.yellow.bold);
}
exports.start = start;

