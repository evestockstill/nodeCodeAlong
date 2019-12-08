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
    response.setHeader('Content-Type', 'text/plain');
    response.writeHead(body);
    response.end();
  }
function upload(response) {
  console.log('reqest handler upload called'.red);
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead('hello uppload?');
  response.end();
}
exports.start = start;
exports.upload = upload;


