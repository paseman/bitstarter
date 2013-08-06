var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');


app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  var s = buf.toString(); //[encoding], [start], [end]);

  response.send(s);
});

//WGP var port = process.env.PORT || 5000;
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
