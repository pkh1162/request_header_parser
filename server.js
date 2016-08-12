var express = require("express");

var app = express();
app.set("view engine", "pug");

app.get("/", function(req, res){
    res.render("index");
})

app.get("/whoami", function(req, res){
    var whoami = {
        ipaddress : req.ip,
        language : req.headers["accept-language"],
        software : req.headers["user-agent"]
    }
    
    res.write(JSON.stringify(whoami));
    res.end();
})

app.listen(process.env.PORT || 8080, function(){
    console.log("I'm listening.");
})