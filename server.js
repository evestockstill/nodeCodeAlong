const http = require('http');
const PORT = 8888;
const url = require('url');
function start(route, handle) {
function onRequest(request, response) {
const  pathname = url.parse(request.url).pathname;
console.log(`request for ${pathname} recieved.`.blue);
route(handle, pathname, response, request);
}
http.createServer(onRequest).listen(PORT);
console.log(`server running on port ${PORT}`.yellow.bold); 
}
exports.start = start;


