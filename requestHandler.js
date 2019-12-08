const exec = require('child_process').exec;
function start(res) {
  console.log('request handler "start" was called'.cyan);
  exec('find/', {
    timeout: 10000, maxBuffer: 20000*1024 },
   function (error, stdout, stderr) {
     res.setHeader('Content-Type', 'text/plain');
     res.writeHead(stdout);
     res.end();
  });
}
function upload(res) {
  console.log('reqest handler upload called'.red);
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead('hello uppload');
  res.end();
}
exports.start = start;
exports.upload = upload;


