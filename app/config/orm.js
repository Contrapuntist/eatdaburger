// Importing SQL Connection Setup
const connection = require('./connection.js'); 
var mysql      = require('mysql');
// mysql functions in object relation map format
var orm = {
    selectAll: function(tableName, cb) {
        var queryStr = "SELECT * FROM " + tableName;
        console.log(queryStr); 
        connection.query(queryStr, function(err, res){
            if (err) {
                throw err;
            }
            cb(res); 
            // console.log(res);
        })
    }, 

    create: function(table, cols, vals, cb) {
    // SQL syntax: Insert INTO table (column1, etc.) values (value1, etc.);   
    // console.log("columns passed in orm: " + cols);
    
    // matching '?' marks for mysql query string
    var totalValsQMarks = qMarks(vals.length);
    // console.log(totalValsQMarks);
    
    // var colString = cols.toString(); 
    // console.log(colString); 
    
    var queryStr = "INSERT INTO " + table + " (" + cols + ") VALUES (" + totalValsQMarks + " ) ";
    
    console.log(queryStr);
        connection.query(queryStr, vals, function (err, res) {
            console.log(queryStr.sql);
            if (err) {
                throw err;
            } 
            cb(res);
            console.log(res); 
        }); 
    }, 

    update: function(table, updateVal, condition, cb) { 
        var queryStr = "UPDATE " + table + " SET " + updateVal + " WHERE " + condition;
        connection.query(queryStr, function (err, res) {
            console.log(res);
            cb(res)
        });
    }
} 

function qMarks (arrLength) { 
    var qArr = [];
    for (var i = 0; i < arrLength; i++ ) { 
        qArr.push("?"); 
    } 
    return qArr.toString();
} 

// / orm.selectAll("burgers");
// var testCol = ['burger_name', 'devoured'];
// var testVal = ['Groot Burger', false]; 
// var testObj = {
//     "burger_name": "Groot Burger",
//     "devoured": false
// };
// var updateSet = '[ "devoured =" + false ]'
// var updateWhere = '["burger_name = The Heartburn"]';


// orm.updateOne('burgers', updateSet, updateWhere);


module.exports = orm;