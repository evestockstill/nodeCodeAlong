function start() {
  console.log('request handler start was called');
}
function upload() {
  console.log('reqest handler upload called');
}
exports.start = start;
exports.upload = upload;