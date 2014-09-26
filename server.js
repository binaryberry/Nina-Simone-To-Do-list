var server = require('express')();
var http = require('http').Server(server);
//var ejs = require('ejs'); to be included if you're not using express
server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');
server.set('css', __dirname + '/css');
server.use(require('express-ejs-layouts'));
server.use(require('express').static('public'));

server.get('/', function(request, response){
  response.sendfile('index.html');
});

server.get('/page3', function(request, response){
  response.send('<h1>The Sun is a terrible newspaper</h1>');
});

http.listen($PORT, function(){
  console.log('listening on port' + $PORT);
});
