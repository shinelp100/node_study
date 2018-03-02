const express = require("express");
const superagent = require("superagent");
const cheerio = require("cheerio");
const app = express();

app.get("/", function (req, res, next) {
    superagent.get('https://cnodejs.org')
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            console.log(sres.text);
            $("#topic_list .topic_title").each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: "https://cnodejs.org"+$element.attr('href')
                })
            });
            res.send(items);
        })
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});