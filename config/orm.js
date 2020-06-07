const connection = require("./connection.js");

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
    insertOne: function (tableName, burger_name, cb) {
        let queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, FALSE)";
        connection.query(queryString, [tableName, burger_name], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (tableName, idNum, cb) {
        let queryString = "UPDATE ?? SET burgers.devoured =  TRUE WHERE burgers.id = ?"
        connection.query(queryString, [tableName, idNum], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;

