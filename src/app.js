var express = require("express");
var app = express();
var path = require("path");
var request = require('request');


app.use('/static',express.static('static'));

app.set('views', __dirname + '/static');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use("/idCard",function(req,res){
    var apiBaseUrl = "http://apis.juhe.cn/idcard/index?key=a3ecb0b9abe761f25f83643bd1f1bfb2",
        cardno=req.query.cardno,
        queryUrl = apiBaseUrl+"&cardno="+cardno;
    request(queryUrl, function (error, response, data) {
        if (!error && response.statusCode == 200) {
            var results = JSON.parse(data);
            res.locals.area = results.result.area;
            res.locals.sex = results.result.sex;
            res.locals.birthday = results.result.birthday;
            res.render('result.html');
            // res.sendFile(path.join(__dirname+'/static/result.html'));
        }
    });
});
app.listen(3000, function () {
    console.log("App started on port 3000");
});