const express = require("express");
const superagent = require("superagent");
const cheerio = require("cheerio");
const utf8 = require('utf8');
const app = express();

app.get("/", function (req, res, next) {
    //superagent 中文文档 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
    superagent.get('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1519969270223')
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $(".modulelist").each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: utf8.encode($element.find(".moduletitle i.txt").html()),
                    href: "https://m.wangcaigu.com"+$element.attr('href')
                })
            });
            console.log(typeof JSON.parse(sres.text));
            res.send(JSON.parse(sres.text).songlist);
        })
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});