var express = require("express");
var app     = express();

app.get('/api/whoami',function(req,res){
	res.send({
		ipaddress : req.ip,
		software  : req.headers['user-agent'],
		language  : req.headers['accept-language'].split(",")[0]
	});
});

app.listen(3000,function(){
	console.log("Server is listening in port 3000!");
});