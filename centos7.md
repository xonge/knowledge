1. 定时任务

    ````
    crontab -e
    crontab -l
    ````

    ````
    24 * * * * /usr/local/script
    分 时 日 月 星期
    ````
    
2. iptables开启端口，（centos7.3上测试通过）

    ````bash
    iptables -I INPUT -p tcp --dport 3306 -j ACCEPT
    ````
    
3. 查看当前服务器时间

    ````bash
    date
    ````
    
1. 内核升级:
    参考: http://www.centoscn.com/CentOS/config/2016/0119/6678.html
    
2. 从服务器下载文件到本地：
    scp 4:/root/Insomnia-3.5.13.dmg /Users/UserName
    参考：http://www.cnblogs.com/no7dw/archive/2012/07/07/2580307.html
    
### 查看进程
1. ps -ef | grep java
    参考：http://www.centoscn.com/CentOS/help/2014/1110/4100.html