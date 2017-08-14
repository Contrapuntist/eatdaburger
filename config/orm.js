// Importing SQL Connection Setup
const connection = require('./connection.js'); 

// mysql functions in object relation map format
var orm = {
    selectAll: function(tableName) {
        var queryStr = "SELECT * FROM " + tableName;
        console.log(queryStr); 
        connection.query(queryStr, function(err, res){
            if (err) {
                throw err;
            }
            // cb(res); 
            console.log(res);
        })

    }, 

    insertOne: function(table, col, val, cb) {
        var queryStr = "INSERT INTO " + table + "?? VALUES ??";
        connection.query(queryStr, function (err, res) {
            if (err) {
                throw err;
            } 
            // cb(res);
            console.log(res); 
        }); 
    }, 

    updateOne: function(table, col, val, cb) { 
        var queryStr = "UPDATE " + table + " SET ?? where ?";
        connection.query(queryStr, function (err, res) {
            console.log(res);
        });
    }
} 

orm.selectAll("burgers");