var orm = require('../config/orm.js');

var burger = {
    
    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res); 
        });
    }, 
    
    create: function(cols, vals, cb) {
        console.log("columns passed in model: " + cols);
        var table = "burgers"
        orm.create(table, cols, vals, function (res) { 
            cb(res);
        });
    }, 
    
    update: function(updateVal, condition, cb) { 
        var table = "burgers";
        orm.update(table, updateVal, condition, function(res) { 
            cb(res);
        });
    }
} 

module.exports = burger;