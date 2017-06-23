### Ubuntu系统安装Ruby的三种方法

1. Ubuntu系统安装Ruby

````
# sudo apt-get update
# sudo apt-get install ruby
````

2. gem 命令行执行命令时报错You don't have write permissions for the /Library/***

    ````
    sudo gem install cocoapods
    ````
    [参考](http://blog.csdn.net/soindy/article/details/46470463)
    
3. ruby下的mkmf.rb can't find header files for ruby at

    ````
    apt-get  isntall   ruby-dev  #如果是在Ubuntu等系统下面
    ````
    [参考](http://blog.csdn.net/xinguimeng/article/details/49728821)
    
4. centos7 安装bzip2,tar: bzip2：无法 exec: 没有那个文件或目录

    ````bash
    yum install bzip2
    ````
    [参考](http://www.cnblogs.com/isenhome/p/6445524.html)
    
### scp操作

1. 上传文件，指定端口

    ````bash
    scp -P 12349 upload_file username@server
    ````
    [参考](http://www.cnblogs.com/jixingke/p/6213074.html)
    
### ssh操作

1. ssh 登录，指定端口

    ````bash
    ssh -p xx user@ip      xx 为 端口号    user为用户名   ip为要登陆的ip
    ````
    [参考](http://blog.csdn.net/dtwangquan/article/details/46602361)
    
2. ssh免登录操作

    ````bash
    ssh-copy-id -i ~/.ssh/id_rsa.pub -p 23 jifeng@jifeng03
    ````
    [参考](http://blog.csdn.net/wind520/article/details/38421359)
    
### travis ci

0. Travis-ci是一款持续集成（Continuous Integration）服务，它能够很好地与Github结合，每当代码更新时自动地触发集成过程。

1. 将开发机的公钥复制到生产服务器，将开发机的私钥复制到测试机，测试机通过私钥来伪装成开发机，自动地登录到生产服务器。

1. 首先在本地生成密匙，我是在win10的bash里面生成的。

2. 接下来你需要将本地生成的公钥拷贝到生产服务器上。参考 ssh-copy-id。

3. 安装travis的命令行工具，参考

    ````bash
    sudo apt-get -y update # 可选
    sudo apt-get -y install build-essential zlib1g-dev libssl-dev libreadline6-dev libyaml-dev # 可选
    sudo apt-get install ruby
    gem install travis #
    travis login --github-token 'token' # 我是用github的token登录，参考
    ````
    
4. 配置.travis.yml文件

5. 加密前面生成的私钥

    ````bash
    # github支持对每个项目设置Deploy keys，并且赋予读取权限
    # 所以ssh私钥最好是单独为当前项目准备的，不然travis就对整个账户有了控制权限
    # 你可以通过ssh-keygen命令生成一个新的ssh密钥对
    # 然后添加到项目的Settings->Deploy keys里面，并注意勾上Allow write access
    travis encrypt-file ~/.ssh/id_rsa --add
    编辑.travis.yml，手动删掉所有的转义符（/前面带转义符\）
    还需要正确地设置权限和认证，在before_install下添加：
    # 添加如下两行内容，Host后面的ip替换成你的部署服务器地址
      - chmod 600 ~/.ssh/id_rsa
      - echo -e "Host 123.123.123.123\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
    ````
    [参考](https://juejin.im/entry/5893590a128fe1006545a980)
    [参考2 写的详细](https://juejin.im/entry/570de1f32e958a0069d567f6)
    [参考3 写的详细](https://jingsam.github.io/2017/01/23/deploy-nodejs-with-travis-ci.html)
    [参考3 github上的](https://github.com/nukc/how-to-use-travis-ci)
    [travis.ci官方文档 关于加密密钥的部分](https://docs.travis-ci.com/user/encrypting-files/)
    
### github提交测试

1. 连接github测试

    ````bash
    ssh -T git@github.com
    ````