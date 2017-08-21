### 命令

1. Redis ZSCORE命令

    返回有序集key中，成员member的score值。
    如果member元素不是有序集key的成员，或key不存在，返回nil。
    
    [打开网址](http://www.redis.cn/commands/zscore.html)
    
2. zrangebyscore

    ````redis
    ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]
    ````
    [打开网址](http://www.redis.cn/commands/zrangebyscore.html)
    
### 服务端文件下载

1. [windows](https://github.com/MSOpenTech/redis/releases)

### 客户端连接工具

1. [redis desktop manager win下界面简陋丑，功能少，正在使用](https://redisdesktop.com/download)

1. gui管理软件:
    1. http://getmedis.com/ 付费 30rmb买断
    2. https://redisdesktop.com/ 付费,自己编译免费,编译地址: http://docs.redisdesktop.com/en/latest/install/#build-from-source
    
2.　请问有没有好的方法遍历redis里面的所有key
    1. redis-cli keys *
    2. 参考: https://cnodejs.org/topic/51adcce0555d34c678a0c52b
        https://www.douban.com/group/topic/15516593/
        
3. 删除键：（laravel对列使用的list数据类型）
    del queues:emails
    
4. 选择数据库：
    select 0
    //选择到0数据库 redis默认的数据库是0~15一共16个数据库
    
5. 返回key的数据类型:
    type queues:emails

6. 返回redis的相关信息:
    info

7. 返回当前数据库中所有key的数量:
    dbsize
    
以上参考：http://blog.csdn.net/wclxyn/article/details/8449082

8. 读取键里面的值：
    lrange queues:emails 0 10 // 0到10

以上参考：http://www.cnblogs.com/stephen-liu74/archive/2012/02/14/2351859.html

9. 获取有序集合zset的值：
    zrange queues:emails:delayed 0 10
    
以上参考：http://www.tuicool.com/articles/fQjIFre
    