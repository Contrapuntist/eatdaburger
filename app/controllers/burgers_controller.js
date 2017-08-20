var express = require('express');
var router = express.Router(); 
var burger = require('../models/burger.js');

// Routin to retrieve all burgers in db via model => orm
router.get('/', function (req, res) {
    burger.all(function(data) {
        var allBurgersObj = {
            burgers: data
        }
        console.log(allBurgersObj);
        res.render('index', allBurgersObj);
    });
});

// SQL statement: INSERT INTO table (column1, etc.) VALUES (Val for col1, etc.);
router.post('/', function(req, res) { 
    console.log(req.body.devour);
    console.log(req.body.burgerentry); 

    // Setting up data to send to model
    var burgCols = ["burger_name", "devoured"]; 
    burgCols = burgCols.toString();
    var burgVals =  [req.body.burgerentry, req.body.devour];

    // Controller routing to model to create burger
    burger.create(burgCols, burgVals, function() {
        // redirect to index with updated data 
        res.redirect('/');
    });
});

// SQL statement:  UPDATE table SET col = value where condition;  [condition may vary]
router.put('/:burger', function (req, res) {
    // Define params for new burger
    var burgerID = "ID = " + req.params.burger;
    burgerID = String(burgerID);
    console.log("Checking burger id string" + burgerID);  
    var nowDevoured = "devoured = true";
    
    // sending to module with devoured 'true' for burgerID sent in URL
    burger.update(nowDevoured, burgerID, function() {
        res.redirect('/');
    }); 
})

module.exports = router;