//推荐使用npm安装使用sdk: npm install --save showapi-sdk
'use strict';
// 注册一个用户
var showapiSdk = require('showapi-sdk');

module.exports = function api() {

    //设置你测试用的appId和secret,img
    var appId = '55673';
    var secret = 'f5c4b572cf6441b8841f47334ee66482';
    //开启debug
    //showapiSdk.debug(true);
    if (!(appId && secret)) {
        console.error('请先设置appId等测试参数,详见样例代码内注释!')
        return;
    }
    //全局默认设置
    showapiSdk.setting({
        url: "http://route.showapi.com/341-1",//你要调用的API对应接入点的地址,注意需要先订购了相关套餐才能调
        appId: appId,//你的应用id
        secret: secret,//你的密钥
        timeout: 5000,//http超时设置
        options: {//默认请求参数,极少用到
            testParam: 'test'
        }
    })

    var request = showapiSdk.request();
    request.appendText('page', '1');
    request.appendText('maxResult', '20');
    request.post(function (data) {
        console.log(data);
        // return data;
    })
}