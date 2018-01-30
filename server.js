var express = require("express");
var app = express();
var api = require("./api");

app.get("/", function(req, res) {
    // var min = parseInt(req.params.min);
    // var max = parseInt(req.params.max);
    // if (isNaN(min) || isNaN(max)) {
    //     res.status(400);
    //     res.json({ error: "Bad request." });
    //     return;
    // }
    //
    // var result = Math.round((Math.random() * (max - min)) + min);
    // console.dir(api());
    var a = api();
    // res.json(api());
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});