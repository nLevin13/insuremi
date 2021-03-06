
/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Henlo World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express')

app.get('/', function(req, res){
	console.log(req.body);
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('a user connecc');
});

http.listen(8000, function(){
  console.log('listening on *:8000');
});
