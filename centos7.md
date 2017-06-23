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