var express = require("express");
var router  = express.Router();

router.get("/",function(req,res){
	res.send("<h1>Home Page</h1>");
});

router.get("/portfolio",function(req,res){
	res.send("<h1>Portfolio Page</h1>");
});

router.get("/about",function(req,res){
	res.send("<h1>About Page</h1>");
});


module.exports = router;
