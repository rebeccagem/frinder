//A GET Route to /survey which should display the survey page.

// Basic route that sends the user first to the AJAX Page
app.get("/survey", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "survey.html"));
  });

// A default, catch-all route that leads to home.html which displays the home page.


