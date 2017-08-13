// Importing SQL Connection Setup
const connection = require('./connection'); 


// 
var orm = {
    selectAll: function(tableName, cb) {
        var queryStr = "SELECT * FROM " + tableName; 
        conenction.query(queryStr, function(err, res){
            if (err) {
                throw err;
            }
            // cb(res); 
            conosle.log(res);
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

        });
    }
}