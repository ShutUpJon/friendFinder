//Dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

//Express App Setup
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//Run Server
app.listen(PORT, function () {
     console.log("App Listening on http://localhost:" + PORT);
});