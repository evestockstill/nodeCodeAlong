function route(handle, pathname, response) {
  console.log(`about to routa a req for ${pathname}`.pink);
  if(typeof handle[pathname] === 'function') {
  return handle[pathname](response); ;
  } else {
    console.log(`no reqest handler found for ${pathname}`)
    response.writeHead(200, { 'Content-Type': 'text/plain' });
   response.end();
  }
}
exports.route = route;