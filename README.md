# node_study

 - node.js
```angular2html
    this is trying to study node.js
```
 
 - node渲染html文件
 ```html
    app.set('views', __dirname + '/static');
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);
    
    node直接渲染html文件[src]
```   
 - node路由管理
 ```html
    routes(app);
    
    路由集散中心
    module.exports = function(app){
        app.get('/' ,require('./home'));
    
        app.use('/list', require('./list'));
    
        app.use(function(req ,res){
            if(!res.headersSent) {
                res.status(404).render('404.html',{title:"页面去了火星"});
            }
        });
    };
    
    方便实现路由的管理[router]
    
```   
    
    
 - 数据抓取存在两种形式
```angular2html
    1、基于页面去抓取数据（数据直接渲染在页面上的数据）[spiders]
    2、基于接口去抓取数据（数据列表类型的）[spiders_demo]
```

 - 使用eventproxy控制并发
 ```html
    1、对于要并发处理的url 遍历后emit到eventproxy实例上
    2、eventproxy实例会监听这样的事件 最后map（处理）获得的参数
```