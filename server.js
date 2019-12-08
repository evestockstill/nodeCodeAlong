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
function begin(route, handle) {
  function onRequest(req, response) {
    const pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} recieved.`.blue);
    route(handle, pathname, response);
    

    // const content = route(handle, pathname);
    // ressponse.write(content)
    // ressponse.end(); 
  }
http.createServer(onRequest).listen(PORT);
console.log(`server running on port ${PORT}`.yellow.bold); 
};
exports.begin = begin;


