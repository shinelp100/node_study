const express = require("express");
const app = express();
const routes = require('./routes');

//渲染静态的资源文件
app.set('views', __dirname + '/static');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//路由
routes(app);

app.listen(3000, function () {
    console.log("App started on port 3000");
});