1. angularjs 定时执行
    ````javascript
    $timeout(function(){
                  console.log('执行$timeout回调');
                  return 'angular'
              },1000);
    ````
    [参考](http://www.cnblogs.com/liulangmao/p/4526126.html)
    
### 界面相关

1. 输入框失去光标焦点

    ````html
    <input ng-blur="count = count + 1" ng-init="count=0" />
    ````
    
## 插件

### 1. angular-datatables

#### 多项选择

[github官方文档](http://l-lin.github.io/angular-datatables/archives/#!/rowSelect)

[datatables官方文档](https://www.datatables.net/examples/api/select_row.html)