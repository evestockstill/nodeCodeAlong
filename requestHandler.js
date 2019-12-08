const exec = require('child_process').exec;
  function start(response) {
    console.log('request handler "start" was called'.cyan);
    const body = '<html>' +
      '<head>' +
      '<meta http-equiv="Content-Type" content="text/html; ' +
      'charset=UTF-8" />' +
      '</head>' +
      '<body>' +
      '<form action="/upload" method="post">' +
      '<textarea name="text" rows="20" cols="60"></textarea>' +
      '<input type="submit" value="Submit text" />' +
      '</form>' +
      '</body>' +
      '</html>';
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(body);
  }
function upload(response) {
  console.log('reqest handler upload called'.red);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('hello uppload?');
  response.end();
}
exports.start = start;
exports.upload = upload;


