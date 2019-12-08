function route(handle, pathname, response) {
  console.log(`about to routa a req for ${pathname}`.pink);
  if(typeof handle[pathname] === 'function') {
  return handle[pathname](response); ;
  } else {
    console.log(`no reqest handler found for ${pathname}`)
   res.setHeader('Content-Type', 'text/plain');
   res.writeHead(200);
   response.end();
  }
}
exports.route = route;