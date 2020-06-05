const connection = require("../config/connection.js");

const orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableName, burger_name, devoured, cb) {
        let queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [tableName, burger_name, devoured], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (tableName, idNum, cb) {
        let queryString = "UPDATE ?? SET burger.devoured = TRUE WHERE burgers.id = ?"
        connection.query(queryString, [tableName, idNum], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;

