const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all("burgers", function (result) {
            cb(result);
        });
    },
    insertOne: function (burger_name, devoured, cb) {
        orm.all("burgers", burger_name, devoured, function (result) {
            cb(result);
        });
    },
    updateOne: function (idNum, cb) {
        orm.all("burgers", idNum, function (result) {
            cb(result);
        });
    },
}

module.exports = burger;