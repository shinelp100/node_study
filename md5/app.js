const express = require("express");
const utility = require("utility");
const app = express();

app.get('/' ,function(req ,res){
   var q = req.query.q;
   var md5 = utility.md5(q);
   res.send(md5);
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});