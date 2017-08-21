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
    
1. centos7上找不到docker-compose
    
    1. 从github上下载
        
        ````bash
        curl -L https://github.com/docker/compose/releases/download/1.13.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose
        ````
        [打开网址 github](https://github.com/docker/compose/releases)
        [docker官网](https://docs.docker.com/compose/install/#alternative-install-options)
        
### centos7安装docker 搬瓦工vps

1. 用yum安装 不知道是什么版本的

    ````bash
    yum install docker
    // 查看docker版本
    docker version
    // 安装完成后，使用下面的命令来启动 docker 服务，并将其设置为开机启动：
    systemctl  start docker.service
    systemctl  enable docker.service
    // 下载官方的 CentOS 镜像到本地
    docker pull centos
    // 确认 CentOS 镜像已经被获取
    docker images centos
    // 运行一个 Docker 容器
    docker run -i -t centos /bin/bash
    // 
    cat /etc/redhat-release
    // 我们还可以搜索基于 Fedora 和 Ubuntu 操作系统的容器
    docker search ubuntu
    docker search fedora
    // 显示当前正在运行容器的列表
    docker ps
    ````
    [写的很好的文章](http://www.centoscn.com/image-text/install/2016/0402/6983.html)
