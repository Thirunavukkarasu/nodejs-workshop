'use strict';

var express = require("express");
var path    = require("path");
var mongoClient = require("mongod").mongoClient;
var app      = express();
var port     = process.env.PORT || 3000;
var routes   = require("./app/routes/index");
var api      = require("./app/api/url-shortener");
var mongoUrl = "mongodb://localhost:27017/url-shortener";

mongoClient.connect(mongoUrl,function(err,db){
	if(err){
		throw new Error("Database failed to connect!");
	} 
	else {
		console.log("Successfully connected to MongoDB on port 27017!");
	}

	app.set('views',path.join(__dirname,'views'));
	app.set('view engine','jade');

	db.createCollection("sites",{
		capped : true,
		size   : 5242880,
		max    : 5000
	});

	routes(app,db);
	api(app,db);

	app.listen(port,function(){
 		console.log("Server listening on port "+port);
	});
});
