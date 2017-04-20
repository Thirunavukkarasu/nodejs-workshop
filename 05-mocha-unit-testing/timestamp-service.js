var express = require("express");
var app     = express();

app.get('/',function(req,res){
   res.send("<h1>Hello World!</h1>"); 
});

app.get('/:date',function(req,res){
   var inputParam = req.params.date;
   var inputDate  = isNaN(Number(inputParam))?unescape(inputParam):inputParam*1000;
   var parsedDate = new Date(inputDate);
   var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
   
   if(parsedDate != "Invalid Date"){
      res.send({
         unix    : parsedDate.getTime()/1000,
         natural : monthNames[parsedDate.getMonth()]+" "+parsedDate.getDate()+", "+parsedDate.getFullYear() 
      });
   }
   else{
      res.send({
         unix    : null,
         natural : null
      });      
   }
});

app.listen(8080,function(){
   console.log("Server is running on port 8080!"); 
});