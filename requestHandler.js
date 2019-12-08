const exec = require('child_process').exec;
function start(res) {
  console.log('request handler "start" was called'.cyan);
  exec('ls -lah', function(error,stdout, stderr) {
   res.setHeader('Content-Type', 'text/plain');
   res.writeHead(stdout);
   res.end();
  });
}
function upload(res) {
  console.log('reqest handler upload called'.red);
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead('hello uppload');
}
exports.start = start;
exports.upload = upload;


