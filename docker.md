[docker入门 nodejs](https://blog.fundebug.com/2017/03/27/nodejs-docker/)

### 操作命令

###### [参考1 个人博客](http://blog.csdn.net/wanghailong041/article/details/52162293)

1. 开启容器

    ````
    docker-compose up -d nginx mysql redis
    ````
    
2. 停止容器

    ````
    docker-compose stop
    ````

3. 停止并删除容器，（谨慎操作此命令）

    ````
    docker-compose down
    ````
    
### 问题

1. 多尝试几次，或者在docker界面里面设置dns服务器为8.8.8.8，（个人觉得效果不大）

    ````
    Client.Timeout exceeded while awaiting headers
    https://registry-1.docker.io/v2/
    ````
