const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let selectedBurgerId = req.params.id;
    console.log(req.body)
    let burgerStatus = req.body.devoured

    console.log(burgerStatus)

    if (burgerStatus === "0") {
        burger.devourIt(selectedBurgerId, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    } else {
        burger.wantAgain(selectedBurgerId, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    }

});

router.delete("/api/burgers", function (req, res) {
    burger.deleteAll(function (result) {

        res.status(200).end();

    });
});

module.exports = router;