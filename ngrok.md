1. windows下编译:
    1.安装google go
    centos7 删除 yum安装的软件:
    yum -y remove golang
    参考资料: http://gzmaster.blog.51cto.com/299556/72278
    centos7安装go:
        go 官网: https://golang.org/dl/
        下载 go:
        wget https://storage.googleapis.com/golang/go1.6.linux-amd64.tar.gz
        tar -C /usr/local -xzf go1.6.linux-amd64.tar.gz
        把文件添加到环境变量里面去
        vi ~/.zshrc
        在后面添加
        export PATH=$PATH:/usr/local/go/bin
        source ~/.zshrc
        
        参考资料: http://www.pangxie.space/docker/422
    2.安装Mingw 
    3.把go的bin目录添加到PATH环境变量，可以直接在CMD中执行 
    SET PATH=%PATH%;C:\go\bin 
    5.把mingw的bin目录添加到PATH路径 
    SET PATH=%PATH%;C:\go\bin 
    6.下载ngrok源码，下载地址 
    https://codeload.github.com/inconshreveable/ngrok/zip/master 
    7.将下载的zip解压出来，修改Makefile 
    将 
    export GOPATH:=$(shell pwd) 
    改为 
    export GOPATH:=C:\Users\Administrator\Desktop\ngork\ngrok-src 
    将 
    bin/go-bindata: 
    GOOS="" GOARCH="" go get github.com/jteeuwen/go-bindata/go-bindata 
    
    这段改为 
    bin/go-bindata: 
    GOOS=windows GOARCH=amd64 go get github.com/jteeuwen/go-bindata/go-bindata 
    8.修改log4go的路径 
    修改src\ngrok\log\logger.go中log4o那段代码为 
    log "github.com/keepeye/log4go" 
    
    9.cmd执行 
    make release-all
    
    
    一、编译Windwos客户端
    cd /usr/local/go/src
    GOOS=windows GOARCH=amd64 ./make.bash
    cd /usr/local/ngrok
    GOOS=windows GOARCH=amd64 make release-client
    #同理，这里的amd64是64位系统，32位改成386
    #应该会在 bin/windows_amd64 目录下生成ngrok客户端程序
    
    启动步骤：
    1、将ngrok.exe放在D:\ngrok，并且在D:\ngrok编辑配置文件ngrok.cfg
    server_addr: "example.com:4443"
    trust_host_root_certs: false
    2.打开windows控制台win+r ,进入D:\ngrok，执行
    ./ngrok -config=ngrok.cfg -log=ngrok.log -subdomain=test 8080
    
    服务端: bin/ngrokd -tlsKey=device.key -tlsCrt=device.crt -domain="www.baidu.com" -httpAddr=":8088" -httpsAddr=":8089"
    客户端: bin/ngrok -config=ngrok-config 80
    
    错误:  Failed to read message: remote error: bad certificate
    
    参考资料:   http://norkts.iteye.com/blog/2257515
                http://nanchunle.blog.51cto.com/9244770/1748761
                http://www.ekan001.com/articles/38
                https://imququ.com/post/self-hosted-ngrokd.html
                http://tonybai.com/2015/03/14/selfhost-ngrok-service/
                http://zpblog.cn/linux/run-ngrok-on-your-own-server.html
                
                
    bash
    从服务器下载文件到本机:
    scp -P 29331 root@IP:/root/ngrok/ngrok/rootCA.pem ./rootCA.pem
    参考资料: http://www.vpser.net/manage/scp.html