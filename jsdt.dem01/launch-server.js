/**
 * 
 */
var open = require('open');
var express = require('express');
var app = express();

// define port
var port = 3222;

// serve static content
app.use(express.static(__dirname + '/'));

// launch server 
app.listen(process.env.PORT || port, function() {
	console.log('Example app listening on port ' + port + '!');
});

// open with default browser
open('http://localhost:' + port);