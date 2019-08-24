var path = require("path");

// Displays all characters
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../data.friends.js"));
});
