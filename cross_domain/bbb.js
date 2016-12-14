var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

http.createServer(function(req, res) {
   var pathname = __dirname + url.parse(req.url).pathname;

  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile(pathname, function(err,data) {
    res.end(data);
  });
}).listen(9000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:9000/');
