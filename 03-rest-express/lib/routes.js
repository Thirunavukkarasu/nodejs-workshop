var express = require("express");
var router  = express.Router();

/**
	GET Request
**/
router.get("/",function(req,res){
	res.json({
		"page" : "HomePage"
	});
});

/**
GET Request with pathParams
ex: http://localhost:3000/about/John
	http://localhost:3000/about/Tuna
**/
router.get("/about/:userName",function(req,res){
	res.send("Name of the user is "+req.params.userName);
});

/**
GET Request with queryParams
ex: http://localhost:3000/about?userName=Jack
**/
router.get("/about",function(req,res){
	res.send("Name of the user is "+req.query.userName);
});

module.exports = router;