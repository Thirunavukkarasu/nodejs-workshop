var express = require("express");
var app     = express();
var config  = require("./config/default");

/**
Check whether any environment varibales set as NODE_ENV

1] Windows

set NODE_ENV=production

2] Linux

NODE_ENV=production

**/
if(process.env.NODE_ENV=="production"){
	config = require("./config/production");
}
else if(process.env.NODE_ENV=="staging"){
	config = require("./config/staging");
}

app.listen(config.port,function(){
	console.log("Server is listening on port "+config.port+"!");
});