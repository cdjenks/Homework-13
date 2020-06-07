const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
        });
    },
    insertOne: function (burger_name, cb) {
        orm.insertOne("burgers", burger_name, function (result) {
            cb(result);
        });
    },
    updateOne: function (idNum, cb) {
        orm.updateOne("burgers", idNum, function (result) {
            cb(result);
        });
    },
}

module.exports = burger;