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
    
4. 查询name值为null

    ````
    db.getCollection('youdianin').find({'local':{$in:[null]}});
    ````
    [参考](http://blog.csdn.net/xiaojin21cen/article/details/40504753)
    
5. 查询name为不为空时(not null )

    ````
    db.foo.find({name:{$ne:null}})
    ````
    [参考](http://blog.csdn.net/xiaojin21cen/article/details/40504753)
    
5. mongodb update，根据条件修改一条或多条记录
   
    ````
    db.getCollection('youdianin').update({"local":/\%.*/}, {$set: {'local': ''}}, false, true);
    ````
    [参考](http://y-zjx.iteye.com/blog/1299880)
   
6. 模糊查询

    ````
    db.city.find({"extra_data.region":/新.*/})
    db.getCollection('youdianin').find({"local":/\..*/});
    ````
    [参考](http://blog.csdn.net/zhouyan8603/article/details/6825834)
    
### 未整理

````
// var res=db.youdianin.find();
// while(res.hasNext()){
//       var res1=db.youdianin.find(); 
//       var re=res.next();
//       while(res1.hasNext()){
//               var re1=res1.next();
//               if(re.id==re1.id){ 
//                    db.youdianin.remove({"id":re1.id}); 
//                }
//        } 
//        db.youdianin.insert(re); 
// }

// db.youdianin.find({});
db.youdianin.distinct('id');
// db.youdianin.find({'id':'5665'});
// 
// db.youdianin.find().forEach( 
//  function(row) {
// //   print(row.id);
//      if (db.youdianin.find({'id':row.id})[1]){
//          print('gg');
//          var _id = db.youdianin.find({'id':row.id})[0]['_id'];
//          print(db.youdianin.find({'id':row.id})[0]);
// //          db.youdianin.remove({'_id': _id});
//  }
//  }
//  )

// db.youdianin.find({});

// db.youdianin.find().forEach( 
//  function(row) {
//      print(row.id[0]);
//      db.youdianin.update( { _id: row._id }, {$set: {id: row.id[0]}})
//  }
//  )

// db.youdianin.stats();
````
