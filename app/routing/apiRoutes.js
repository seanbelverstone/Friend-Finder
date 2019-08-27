var friends = require("../data/friends.js");

module.exports = function(app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Stores the user's details (name, photo and scores) into the variable 'user'
    var user = req.body;

    // ParseInt the scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;


    //Doing the ol' double for-loop. First we loop through the friends array. Then, we loop through my scores
    //and take my scores away from the friends scores and saves it in totalDifference. I'm using Math.abs so
    //I never get a negative number
    for(var i = 0; i < friends.length; i++) {

      var totalDifference = 0;

      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      //If the total difference is less than minimum, it sets the index to i so we can loop through again.
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    //After a match has been found, push the user to the friends object.
    friends.push(user);

    //Sends the data back to the browser so we can do it again
    res.json(friends[bestFriendIndex]);
  });
};