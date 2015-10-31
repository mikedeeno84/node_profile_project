//Problem we need a simple way to look at a user's badge count and Javascript point from a web browsert
//solution: use node.js to perform the profile look ups and server our template via http

//1. create a web server

var router=require("./router.js");
var http = require('http');
var https= require("https");

http.createServer(function (request, response) {
  router.home(request,response);
  router.user(request,response);
}).listen(3000);

console.log('Server running at http://<workspace-url>/');



