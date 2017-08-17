const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 3000;

// static directory
app.use(express.static('app/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Require routing files to be accessed 
const routes = require("./app/controllers/burgers_controller")

app.use("/", routes);

// Server listening function 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});