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
    cat.insertOne(req.body.burger_name, req.body.devoured, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function (req, res) {
    let selectedBurgerId = req.params.id;

    console.log("Id Number:", selectedBurgerId);

    cat.updateOne(selectedBurgerId, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;