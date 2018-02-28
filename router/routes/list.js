const express = require("express");
const router = express.Router();

/*获取列表页面*/
router.get('/',function(req ,res){
    res.render("list.html");
});

module.exports = router;