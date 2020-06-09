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
    devourIt: function (idNum, cb) {
        orm.devourIt("burgers", idNum, function (result) {
            cb(result);
        });
    },
    wantAgain: function (idNum, cb) {
        orm.wantAgain("burgers", idNum, function (result) {
            cb(result);
        });
    },
    deleteAll: function (cb) {
        orm.deleteAll(function (result) {
            cb(result);
        });
    }
}

module.exports = burger;