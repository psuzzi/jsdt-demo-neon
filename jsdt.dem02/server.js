/**
 * 
 */
// Express: Fast, unopinionated, minimalist
var express = require('express');
var app = express(); 
var port = 3000;

// MongoDB
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/myNewDatabase';

/** Middleware can process any request*/
app.use((request, response, next) => {  
	//console.log(request.headers)
	next()
});

//setup static files directory
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
	console.log('get "/"')
	response.send('<h2>Express</h2>')
})

// fixed for the object used in this demo
const f_id = 'demo_id';

// read 
app.get('/read', (request, response) => {
	// get read
	var doc = null;
	MongoClient.connect(url,function(err,db){
		if(err){
			response.send(400,err);
			return console.log(err);
		}
		var collection = db.collection('jsdt-demo');
		collection.findOne({'_id':f_id}, function(err,doc){
			response.send(201, JSON.stringify(doc))
		});
		db.close();
	});
})

app.get('/set', (request, response) => {  
	var doc = { '_id': f_id,
			'read_lights': request.param('read_lights'),
			'read_temp': request.param('read_temp'),
			'set_lights': request.param('set_lights'),
			'set_temp': request.param('set_temp') 
	}; 
	MongoClient.connect(url,function(err,db){
		if(err){
			return console.log(err);
		}
		var collection = db.collection('jsdt-demo');
		collection.save(doc);
		response.send(JSON.stringify(doc))
		db.close();
	});
})

app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
})