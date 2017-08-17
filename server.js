const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));


// Require routing files to be accessed 
require("./app/controllers/burgers_controller")(app);
// require("./app/routing/htmlRoutes")(app);

// Server listening function 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});