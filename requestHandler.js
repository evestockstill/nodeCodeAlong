function start() {
  console.log('request handler "start" was called'.cyan);
  
  function sleep(milliSeconds) {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  sleep(10000);
  return 'hello start again';
}
function upload() {
  console.log('reqest handler upload called'.red);
  return 'hello upload?';
}
exports.upload = upload;
exports.start = start;


