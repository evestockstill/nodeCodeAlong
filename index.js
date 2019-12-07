const colors = require('colors');
const server = require('./server');
const router = require('./router');
server.start(router.route);