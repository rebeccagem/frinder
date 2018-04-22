// MOVE TO friends.js
// =============================================================
var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name": "Ahmed2",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}]

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Log (server-side) when our server has started
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


// MOVE TO apiRoutes.js
// =============================================================
//A GET Route to /survey which should display the survey page.
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

// A default, catch-all route that leads to home.html which displays the home page.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});


// MOVE TO htmlRoutes.js
// =============================================================
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// Displays all characters
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

//   A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// Create New Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;

    console.log(newFriend);

    // We then add the json the user sent to the character array
    friends.push(newFriend);

    // We then display the JSON to the users
    res.json(newFriend);
});

