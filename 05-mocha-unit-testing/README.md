# Unit Testing with Mocha and SuperTest

Before writing unit test, let’s discuss how the building block will look.

You need to provide description of unit test using “describe” function and use “it” to define several unit test cases into it. “it” provides us “done” function is used to indicate the end of test case.

```
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
});
```