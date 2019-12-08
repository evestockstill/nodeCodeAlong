// const colors = require('colors');
// const http = require('http');
// const server = http.createServer((req, res) => {
// res.setHeader('Content-Type', 'text/plain');
// res.write('Hello World-2');
// res.end();
// });
// const PORT = 8888;
// server.listen(PORT, () => console.log(`server running on port ${PORT}`.yellow.bold));
// const multer = require({ dest: './uploads/' });
const http = require('http');
const PORT = 8888;
const url = require('url');
function begin(route, handle) {
  function onRequest(req, res) {
    const pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname} recieved.`.blue);
    route(handle, pathname, res);
    

    // const content = route(handle, pathname);
    // res.write(content)
    // res.end(); 
  }
http.createServer(onRequest).listen(PORT);
console.log(`server running on port ${PORT}`.yellow.bold); 
};
exports.begin = begin;


