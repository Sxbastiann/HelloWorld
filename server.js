/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name:  Sebastian Denis Student ID: 108534215! Date: ___9/10/2023_____________
*
*  Online (Cyclic) URL:  https://blush-anemone-tam.cyclic.app/
*
********************************************************************************/ 





var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'root route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("<h2> <a href='/about'> Sebastian Denis - 108534215!</a><h2>");
    
   
});

// setup a route to listen on the '/about' url path
app.get("/about", (req, res) => {
    res.json({course: "WEB322", section: "NGG", task: "In-class Assignment 1"});
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
