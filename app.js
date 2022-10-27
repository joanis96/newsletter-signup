/* Mailchimp api key : 986a815da89ebea1438a70f1601200b6-us21  */

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// to be able to use img and css stylesheet
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;

    res.send(console.log("first Name is: " + firstname, "last Name is :" + lastname, "email is: " + email));
    
})

app.listen(3000, function() {
    console.log("Successfully loaded on port 3000 !");
});