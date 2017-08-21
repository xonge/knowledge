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
    
### laradock
1. 列出正在运行的容器
    docker ps
2. 你也可以使用以下命令查看某项目的容器
    docker-compose ps
3. 关闭所有容器
    docker-compose stop
4. 停止某个容器
    docker-compose stop {容器名称}
5. 删除所有容器
    docker-compose down
6. 进入容器 (通过SSH 进入一个运行中的容器)
    docker-compose exec {container-name} bash
7. 重建容器
    docker-compose build workspace php-fpm
    

0. 安装toolbox:
    https://www.docker.com/docker-toolbox
1. 新建 docker-compose.yml:
    nginx: 
    	image: nginx:latest
    	ports: 
    		- 80:80
2. docker-machine start default:
    Host does not exist: "default"
    解决: docker-machine create --driver virtualbox default
    参考资料: https://docs.docker.com/machine/get-started/
3. docker-machine start default
4. docker-compose up -d
    出现的问题:
    ERROR: Couldn't connect to Docker daemon - you might need to run `docker-machine start default`.
    解决: eval "$(docker-machine env default)"
    参考: https://github.com/docker/compose/issues/2180
    found character '\t' that cannot start any token
    yaml不允许使用tab,只能使用空格
    参考资料: https://github.com/moraes/config/issues/1
    等待下载...
5. docker-machine ip default
得到一个ip
6. docker ps

参考: https://lighter.github.io/2016/05/11/from-vagrant-to-docker-how-to-use-docker-for-local-web-development/
https://lighter.github.io/2016/05/11/from-vagrant-to-docker-how-to-use-docker-for-local-web-development/

# centos7安装docker:(docker官方版本,linux内核必须高于3.1,搬瓦工无法升级内核)
1. 升级yum:
    yum update
2. Add the yum repo:
    tee /etc/yum.repos.d/docker.repo <<-'EOF'
    [dockerrepo]
    name=Docker Repository
    baseurl=https://yum.dockerproject.org/repo/main/centos/7/
    enabled=1
    gpgcheck=1
    gpgkey=https://yum.dockerproject.org/gpg
    EOF
3. 安装:
    yum install docker-engine
4. 启动:
    service docker start
5. 如果有冲突,需要卸载旧版本:
    yum list installed|grep docker
    yum remove docker-selinux.x86_64
    参考: http://stackoverflow.com/questions/38087016/installing-docker-on-centos7-docker-engine-selinux-conflicts-with-docker-selinu
# centos7安装docker:(centos官方版本)
1. 安装:
    yum install docker
2. 启动docker服务:
    systemctl start docker
3. 开机自动启动:
    systemctl enable docker
4. docker daemon &
    出现错误: Error starting daemon: Error initializing network controller: Error creating default "bridge" network: package not installed
    
### docker for mac:
1. 创建一个nginx的容器并启动:
        docker run -d -p 81:80 --name webserver3 nginx
        把本地的80端口映射到81端口
    2. 查看容器状态:
        docker ps
    3. 停止容器:
        docker stop webserver3
    4. 启动容器:
        docker start webserver3
    5. mysql挂载本地数据库文件:
        参考: http://blog.csdn.net/qq362228416/article/details/48709813
        http://www.codesec.net/view/201238.html
