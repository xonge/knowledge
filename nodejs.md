### nvm for windows

1. https://github.com/coreybutler/nvm-windows

2. 

### nvm
1. 安装 [github](https://github.com/creationix/nvm/blob/master/README.md#install-script)


### request
1. get方法请求https时出现 Error: unable to verify the first certificate 错误

    ````javascript
        'use strict';
     
        var request = require('request');
        var agentOptions;
        var agent;
     
        agentOptions = {
          host: 'www.example.com'
        , port: '443'
        , path: '/'
        , rejectUnauthorized: false
        };
     
        agent = new https.Agent(agentOptions);
     
        request({
          url: "https://www.example.com/api/endpoint"
        , method: 'GET'
        , agent: agent
        }, function (err, resp, body) {
          // ... 
        });
    ````

    参考 https://www.npmjs.com/package/ssl-root-cas Kinda Bad Ideas 区域
    
####

1. 解析url

    ````javascript
    url.parse('http://www.baidu.com');
    ````
    [参考](http://www.cnblogs.com/whiteMu/p/5983125.html)
    
### 文件操作

1. 读取文件方式1
    
    ````javascript
    var rf=require("fs");  
    var data=rf.readFileSync("test","utf-8");  
    console.log(data);  
    console.log("READ FILE SYNC END");
    ````
    [打开网址](http://blog.csdn.net/zk437092645/article/details/9231787)
    
### 队列

1.  基于redis和cron（node-schedule）

    [打开网址](http://blog.csdn.net/shenlei19911210/article/details/52584884)
    
### expressjs

1.  [官网](http://expressjs.com/)

2.  安装expressjs

    ````bash
    npm install express --save
    ````
    
### 经常使用的包

1. [redis](https://www.npmjs.com/package/redis)