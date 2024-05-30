const express = require("express");
const port  = 5000;
const app = express();

app.get("/", function(req, res){
    res.send(" hai hello world");
});

app.listen(port, function(){
    console.log("listening in port number 5000");
});