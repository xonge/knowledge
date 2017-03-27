### windows

#### 使用方法

1. 导出json格式的文件

    mongoexport.exe -d sanshi -c blog -o blog.json
    
    参考：http://chenzhou123520.iteye.com/blog/1641319
    
    mongodb官方文档：https://docs.mongodb.com/manual/reference/program/mongoexport/
    
    
#### 代码示例

1. 获取记录总数

    mongodb官方文档：https://docs.mongodb.com/manual/reference/method/cursor.count/
    
2. 分页

    db.test.find().sort({"age":1}).skip(2).limit(2);
    
    参考：http://www.cnblogs.com/xiaolai/p/3401289.html
    
3. 获取记录

    db.users.find({'name' : 'hurry'},{'name' : 1, 'age' : 1, 'skills' : 1});
    
    简单的等于: select name, age, skills from users where name = 'hurry';
    
    补充说明： 第一个{} 放where条件 第二个{} 指定那些列显示和不显示 （0表示不显示 1表示显示)
    
    参考：http://blog.csdn.net/wangli61289/article/details/40623097