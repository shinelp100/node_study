const express = require('express');
const router = express.Router();

/*获取首页页面*/
router.get('/', function (req, res, next) {
    res.render('home.html');
});

module.exports = router;