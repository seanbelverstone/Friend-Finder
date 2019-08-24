var friends = require("../data/friends");

// Shows the friends JSON object
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
    
        var userInput = req.body;
    
        // Parse ints the scores to be numbers
        for(var i = 0; i < userInput.scores.length; i++) {
          userInput.scores[i] = parseInt(userInput.scores[i]);
        }
    
        var bestFriendIndex = 0;
        var minimumDifference = 40;
    

        for(var i = 0; i < friends.length; i++) {
          var totalDifference = 0;
          for(var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(userInput.scores[j] - friends[i].scores[j]);
            totalDifference += difference;
          }
    
          if(totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
          }
        }
    
        friends.push(userInput);
    
        res.json(friends[bestFriendIndex]);
      });
    };