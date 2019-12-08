function start() {
  console.log('request handler "start" was called'.cyan);
  return 'starting page-2';
}
function upload() {
  console.log('reqest handler upload called'.red);
  return 'this the upload';
}
exports.upload = upload;
exports.start = start;
