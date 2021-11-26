var express = require("express");
//use the application off of express.
var app = express();

app.use(express.static(__dirname + "/views"));

//define the route for "/"
app.get("/", function (request, response) {
  //show this file when the "/" is requested
  response.sendFile(__dirname + "/views/countdown.html");
});

//start the server
app.listen(8080);

console.log("Running at http://localhost:8080");
