var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


// Displays all characters
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../data.friends.js"));
});
