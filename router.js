function route(handle, pathname ) {
  console.log(`about to routa a req for ${pathname}`.pink);
  if(typeof handle[pathname] === 'function') {
   return handle[pathname](); ;
  } else {
    console.log(`no reqest handler found for ${pathname}`)
    return '404 Not found'
  }
};
exports.route = route;