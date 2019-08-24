var path = require("path");

// Shows the friends JSON object
module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });

    // app.post("/api/friends", function(req, res) {

    //     var matchingFriend = req.body;
      
    //     matchingFriend.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
      
    //     console.log(newCharacter);
      
    //     characters.push(newCharacter);
      
    //     res.json(newCharacter);
    //   });
}