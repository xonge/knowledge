1. 编码url，有字符的范围

    ````javascript
    encodeURI();
    encodeURIComponent();
    // encodeURI()不会加密: !@#$&*()=:/;?+' 
    // 解码
    decodeURI();
    decodeURIComponent();
    ````
    [参考](http://www.cnblogs.com/glory-jzx/archive/2013/06/14/3135580.html)
    
1. 获得对象的长度：
    var obj = {
        name: 'test'
    };
    Object.keys(obj).length // 在无需考虑hasOwnProperty的情况下
    参考：http://www.iteye.com/problems/55943
    
2. 对象添加属性：（原因是我要实现）
    obj.prototype = shuxing;
    参考：https://zhidao.baidu.com/question/542601172.html
    
3. decodeURI()
    出现问题：URIError: URI malformed
    问题参考：http://cnodejs.org/topic/4fd6b7ba839e1e581407aac8
        https://segmentfault.com/a/1190000002532027
    函数参考：http://www.tuicool.com/articles/NZnEzu6
    
4. Assignment to constant variable.

5. 移除元素属性
   div.removeAttribute("class");
   参考：http://www.2cto.com/kf/201206/136729.html
   
#### nodejs

1. 脚本运行时间：

    ````
    console.time(label)  
    console.timeEnd(label)
    ````
    [参考](http://book.51cto.com/art/201405/439608.htm)

2. JS如何优雅的创建连续元素的数组？

3. promise demo：

    ````javascript
    var p1 = new Promise((resolve, reject) => { 
      setTimeout(resolve, 1000, 'one'); 
    }); 
    var p2 = new Promise((resolve, reject) => { 
      setTimeout(resolve, 2000, 'two'); 
    });
    var p3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000, 'three');
    });
    var p4 = new Promise((resolve, reject) => {
      setTimeout(resolve, 4000, 'four');
    });
    var p5 = new Promise((resolve, reject) => {
      reject('reject');
    });
    
    Promise.all([p1, p2, p3, p4, p5]).then(values => { 
      console.log(values);
    }, reason => {
      console.log(reason)
    });
    ````

    [参考](https://wohugb.gitbooks.io/ecmascript-6/content/docs/promise.html)
    [参考：国外](https://www.tomas-dvorak.cz/posts/nodejs-request-without-dependencies/)
    [参考：Moz](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
    
4. javascript如何合并多个数组

    ````javascript
    arr1.concat(arr1, arr2);
    ````
    [参考](https://segmentfault.com/q/1010000000141170)
    
#### lodash

0. 引入：
    ````javascript
    const _ = require('lodash');
    ````

1. 获取两个数组不同的部分：
    ````javascript
    _.difference([1,2,4],[2])
    ````
    [参考](http://www.cnblogs.com/shikelong/p/4489615.html)
    
2. 二维转一维：
    ````javascript
    _.flattenDeep([1, [2, 3, [4]]]);
    ````
    [官方文档](http://lodashjs.com/docs/)
    
#### moment

1. 当前时间的utc格式

    ````javascript
    moment.utc().format(); // 2013-02-04T18:35:24+00:00
    ````
    [官方文档](http://momentjs.com/docs/)

#### async

1. 并发控制

    ````javascript
    mapLimit([], 1 ,function(a) {
       console.log();},function(values) {
    console.log(values);
    }
    )
    ````
    [官方文档](http://caolan.github.io/async/docs.html#mapLimit)
    [demo](http://wiki.jikexueyuan.com/project/node-lessons/async.html)
    
#### request

1. [npm文档](https://www.npmjs.com/package/request)
   
    

    