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