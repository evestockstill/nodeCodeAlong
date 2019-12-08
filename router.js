function route(handle, pathname ) {
  console.log(`trying to get route ${route}`.pink);
  if(typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log(`no reqest handler found for ${pathname}`)
  }
};
exports.route = route;