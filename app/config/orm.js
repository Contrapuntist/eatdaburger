// Importing SQL Connection Setup
const connection = require('./connection.js'); 

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
            console.log(res);
        })
    }, 

    // insertOne: function(table, cols, vals) {
    // // SQL syntax: Insert INTO table (column1, etc.) values (value1, etc.);   

    //     var queryStr = "INSERT INTO " + table + " ?? VALUES ? ";
    //     connection.query(queryStr, cols, vals, function (err, res) {
    //         if (err) {
    //             throw err;
    //         } 
    //         // cb(res);
    //         console.log(res); 
    //     }); 
    // }, 

    updateOne: function(table, col, val) { 
        var queryStr = "UPDATE " + table + " SET ? where ?";
        connection.query(queryStr, function (err, res) {
            console.log(res);
        });
    }
} 


function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// orm.selectAll("burgers");
var testCol = ['burger_name', 'devoured'];
var testVal = ['Groot Burger', false]; 
var testObj = {
    "burger_name": "Groot Burger",
    "devoured": false
};
var updateSet = '[ "devoured =" + false ]'
var updateWhere = '["burger_name = The Heartburn"]';

// orm.insertOne('burgers', testCol, testVal); 
// orm.updateOne('burgers', updateSet, updateWhere);
// orm.insertOne('burger', testCol, testVal); 

module.exports = orm;