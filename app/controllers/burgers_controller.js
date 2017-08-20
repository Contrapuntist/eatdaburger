var express = require('express');
var router = express.Router(); 
var burger = require('../models/burger.js');

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
    // res.redirect('/');
    // Setting up data to send to model
    var burgCols = '"burger_name", "devoured"'; 
    var burgVals =  [req.body.burgerentry, req.body.devour];
    burger.create(burgCols, burgVals, function() {
        // redirect to index with updated data 
        res.redirect('/');
    });
});

// // SQL statement:  UPDATE table SET col = value where condition;  [condition may vary]
// router.put('/:burger', function (req, res) {
//     // Define params for new burger

//     // sending to module 
//     burger.update({}, {}, function() {
//         res.redirect('/');
//     }); 
// })

module.exports = router;