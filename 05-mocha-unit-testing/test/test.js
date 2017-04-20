var supertest = require("supertest");
var should    = require("should");
var server    = supertest.agent("http://localhost:8080");


describe("Test TimeStamp Micro Service",function(){
	it("should return valid natural format date response",function(done){
		server
		.get("/December 17, 2015")
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			res.status.should.equal(200);
			res.body.natural.should.equal("December 17, 2015");
			done();
		});
	});

	it("should return valid unix format date response",function(done){
		server
		.get("/1492695093")
		.expect("Content-type",/json/)
		.expect(200)
		.end(function(err,res){
			res.status.should.equal(200);
			res.body.unix.should.equal(1492695093);
			done();
		});
	});	
});