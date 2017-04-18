var express = require("express");
var app     = express();
var routes  = require("./lib/routes");

/**
Refer the following link for better understanding of express.Router();
https://expressjs.com/en/guide/routing.html
**/

app.use("/",routes);

app.listen(3000,function(){
	console.log("Server is listening on port 3000!");
});