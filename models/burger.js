// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    console.log("Burger.js: all");
    orm.all("burgers", function(res) {
      cb(res);
    });
    console.log("Burger.js: all end");
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    console.log("Burger.js: create", cols, vals);
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    console.log("Burger.js: update", objColVals, condition);
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    console.log("Burger.js: delete");
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (buger_controller.js).
module.exports = burger;
