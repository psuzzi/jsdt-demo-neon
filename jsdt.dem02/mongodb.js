// mongodb.js
module.exports = {
		// test db connection
		test(){
			console.log('test');
		},
		// write data into db
		write(name,data){
			console.log('write');
		},
		// read data from db
		read(name){
			console.log('read');
		}
}


function buildData(read_lights, read_temp, set_lights, set_temp){
	return {
		"read_lights" : read_lights,
		"read_temp" : read_temp,
		"set_lights" : set_lights,
		"set_temp": set_temp
	}
}

/**
 * 
 */

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
var assert = require('assert');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/myNewDatabase';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});

// write data on the DB
MongoClient.connect(url, function (err, db) {
	  if (err) {
	    console.log('Unable to connect to the mongoDB server. Error:', err);
	  } else {
	    // HURRAY!! We are connected. :)
	    console.log('Connection established to', url);

	    // Get the documents collection
	    var collection = db.collection('home-data');
	    
	    var data1 = {name:"home-data-1", values:buildData("false",20.5,"false",21.0)};
	    var data2 = {name:"home-data-2", values:buildData("true",20.5,"true",21.0)};
	    var data3 = {name:"home-data-3", values:buildData("false",22.5,"false",23.0)};
	    
	    // Insert some users
	    collection.insert([data1, data2, data3], function (err, result) {
	      if (err) {
	        console.log(err);
	      } else {
	        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
	      }
	      //Close connection
	      db.close();
	    });

	    // Close connection
	    db.close();
	  }
});


//Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('home-data');

    // Insert some users
    collection.find({name: 'home-data-1'}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
      //Close connection
      db.close();
    });
  }
});



// read data from DB

