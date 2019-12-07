function route(handle, pathname ) {
  console.log(`about to route a req for ${pathname}`.pink);
  if(typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log(`no reqest handler found for ${pathname}`)
  }
};
exports.route = route;