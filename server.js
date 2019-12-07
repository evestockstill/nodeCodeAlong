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
function start() {
  function onRequest(req, res) {
    console.log('request recieved');
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World-3');
    res.end(); 
  }
  http.createServer(onRequest).listen(8888);
  console.log(`server running on port ${PORT}`.yellow.bold);
}
exports.start = start;

