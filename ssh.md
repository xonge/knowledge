1. ssh使用别名登录远程主机，类似 ssh myserver

    1. mac下编辑 ~/.ssh/config （默认位置）
    
        格式参考
        
        ````
        Host            alias #自定义别名
        HostName        hostname  #替换为你的ssh服务器ip或domain
        Port            port #ssh服务器端口，默认为22
        User            user #ssh服务器用户名
        IdentityFile    ~/.ssh/id_rsa #第一个步骤生成的公钥文件对应的私钥文件
        ````
        [打开网址](http://blog.csdn.net/jobschen/article/details/52823980)
        
        
### 生成公钥

1. [github官方例子](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

    ````
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    eval $(ssh-agent -s) // 非win系统下才有效，原因不明
    ssh-add ~/.ssh/id_rsa
    ````