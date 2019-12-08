  const querystring = require('querystring');
  fs = require('fs');
  function start(response, postData) {
    console.log(`request handler 'start' was called`.cyan);
    const body = '<html>' +
      '<head>' +
      '<meta http-equiv="Content-Type" content="text/html; ' +
      'charset=UTF-8" />' +
      '</head>' +
      '<body>' +
      '<form action="/upload" method="post">' +
      '<textarea name="text" rows="20" cols="60"></textarea>' +
      '<input type= "submit" value="Submit text"/>' +
      '</form>' +
      '</body>' +
      '</html>';
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(body);
  }
function upload(response, postData) {
  console.log(`reqest handler upload called`.red);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(`you have sent the text: ` + querystring.parse(postData).text);
  response.end();
}
function show(response) {
  console.log(`request handler 'show' was called`.purple);
  response.writeHead(200, { "Content-Type": "image/png" });
  fs.createReadStream('/tmp/test.png').pipe(response);
}
exports.start = start;
exports.upload = upload;
exports.show = show;


