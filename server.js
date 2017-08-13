const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 3000;

// Require routing files to be accessed 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Server listening function 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});