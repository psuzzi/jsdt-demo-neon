var emptygif = require('emptygif');
var express = require('express');
var app = express();
var port = 3000;
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// setup static files directory
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('<h2>e02-server running</h2>'
			+ '<a href="track.html">tracking</a>');
});

app.get('/tpx.gif', function(req, res, next) {
	console.log('serving tpx');
	io.emit('visit', {
		ip : req.ip,
		ua : req.headers['user-agent']
	});

	emptygif.sendEmptyGif(req, res, {
		'Content-Type' : 'image/gif',
		'Content-Length' : emptygif.emptyGifBufferLength,
		'Cache-Control' : 'public, max-age=0' // or specify expiry to make
	// sure it will call everytime
	});
});

app.use(express.static(__dirname + '/public'));

server.listen(port, function() {
	console.log('Example app listening on port ' + port + '!');
});