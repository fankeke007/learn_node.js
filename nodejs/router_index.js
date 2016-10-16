var server = require("./router_server");
var router = require("./router");

server.start(router.route);
