var path = require("path");

module.exports = function(app) {


// A default, catch-all route that leads to home.html which displays the home page.
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // A default, catch-all route that leads to home.html which displays the home page.
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
//defaults
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
  }