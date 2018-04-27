//gets array from friends.js
var friends = require("../data/friends");
var bodyParser = require("body-parser");
//A GET Route to /survey which should display the survey page.
var newResult;

module.exports = function (app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    // Displays all characters

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    })

    //   A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    // API Post Request
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.scores = newFriend.scores.map(Number);

        var minimum = 100;
        indexOfMin = 20;
        //this loops though all friends in the array
        for (j = 0; j < friends.length; j++) {
            var difference = 0;
            //this loops through each set of scores for each friend in the array and compares them to the new friend
            for (i = 0; i <= 2; i++) {

                difference += Math.abs(newFriend.scores[i] - friends[j].scores[i]);
            }
            //this checks the total difference against a minimum and only overrides it if it is lower
            if (difference <= minimum) {
                minimum = difference;
                indexOfMin = j;

            }

        }
        var bestMatch = JSON.stringify(friends[indexOfMin]);
        console.log(bestMatch);
        res.json(bestMatch);
        //this pushes the new friend to the friend array
        friends.push(newFriend);

    });

};