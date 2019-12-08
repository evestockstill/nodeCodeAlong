// const colors = require('colors');
// const http = require('http');
// const server = http.createServer((req, ressponse) => {
// ressponse.setHeader('Content-Type', 'text/plain');
// ressponse.write('Hello World-2');
// ressponse.end();
// });
// const PORT = 8888;
// server.listen(PORT, () => console.log(`server running on port ${PORT}`.yellow.bold));
// const multer = require({ dest: './uploads/' });
const http = require('http');
const PORT = 8888;
const url = require('url');
function start(route, handle) {
  function onRequest(req, response) {
    let postData = ' ';
    const  pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} recieved.`.blue);
    req.setEncoding('utf8');
    req.addListener('data', function (postDataChunk) {
    postData += postDataChunk;
     console.log(`Received POST data chunk ' ' +
     postDataChunk + ' '`.red);
    });
    req.addListener("end", function () {
    route(handle, pathname, response, postData);
    });
  }
http.createServer(onRequest).listen(PORT);
console.log(`server running on port ${PORT}`.yellow.bold); 
}
exports.start = start;


