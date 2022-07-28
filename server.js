

var express = require('express');
var app = express();

app.get("/",(req,res)=>{

    res.send(
        "<h1>Contoso</h1>"
        +"<hr/>"
        +"<h3>The Contoso Corporation is a multinational business with its headquarters in Paris.</h3>"
        +"<h3>The company is a manufacturing, sales, and support organization with more than 100,000 products.</h3>"
        +"<br/>"
       
    )
});

app.get("/aboutus",(req,res)=>{

    res.send(
        "<h1>Contoso</h1>"
        +"<hr/>"
        +"<br/>"
        +"<ol>"
        +"<li>Headquarters</li>"
        +"<h3>Contoso headquarters is a corporate campus on the outskirts of Paris with dozens of buildings for administrative, engineering, and manufacturing facilities."
        +"All the Contoso datacenters and its internet presence are housed in the Paris headquarters."
        +"The headquarters has 25,000 workers."
        +"</h3>"
        +"<li>Regional hubs</li>"
        +"<h3>Hub offices serve a specific region of the world with 60-percent sales and support staff."
        +"Each regional hub is connected to the Paris headquarters through a high-bandwidth WAN link.</h3>"
        +"</ol>"
       
    )
});

var server = app.listen(9000);
console.log("Contoso is running on port 9000");