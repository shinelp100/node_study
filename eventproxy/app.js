const express = require("express");
const superagent = require("superagent");
const cheerio = require("cheerio");
const eventproxy = require("eventproxy");
const url = require("url");

const app = express();

var cnodeUrl = "https://cnodejs.org/";

app.get('/' ,function(req, res, next){
    superagent.get(cnodeUrl).end(function(err ,sres){
        if(err){
            return console.log(err);
        }
        var topicUrls = [];
        var $ = cheerio.load(sres.text);
        $('#topic_list .topic_title').each(function (idx, element) {
            var $element = $(element);
            var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href);
        });
        // res.send(topicUrls);

        var ep = new eventproxy();
        topicUrls.forEach(function(items ,index){
            superagent.get(items).end(function(err,cres){
                if(err) {
                    return console.log(err);
                }
                ep.emit('topic_html',[items,cres.text])
            })
        });

        ep.after('topic_html',topicUrls.length,function(topics){
            topics = topics.map(function (topicPair) {
                // 接下来都是 jquery 的用法了
                var topicUrl = topicPair[0];
                var topicHtml = topicPair[1];
                var $ = cheerio.load(topicHtml);
                return ({
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    comment1: $('.reply_content').eq(0).text().trim()
                });
            });
            console.log(topicUrls);
            res.send(topics);
        })
    })
});

app.listen(3000 ,function(){
    console.log("this server is listening 3000 port");
});