var friends = require("../data/friends.js");

module.exports = function(app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", (request, response) => response.json(friends));

  app.post("/api/friends", (request, response) => console.log(request.body.answers));
};