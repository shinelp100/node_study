# node_study

 - node.js
```angular2html
    this is trying to study node.js
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