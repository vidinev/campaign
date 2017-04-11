var express = require('express');
var app = express();
var port = 4200;

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/dist'));

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function (req, res) {
  res.sendFile(__dirname  + '/dist/index.html');
});

app.listen(port);
console.log('Server started on port ' + port);
