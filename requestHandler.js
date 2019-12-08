function start() {
  console.log('request handler start was called'.cyan);
}
function upload() {
  console.log('reqest handler upload called'.red);
}
exports.start = start;
exports.upload = upload;