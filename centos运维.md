1. 立即重启 shutdown -r now

2. 查看端口是否被占用:
    lsof -i:端口号
    
3. 出现略过目录:
    cp www.linuxidc.com /usr/share/backgrounds/
    cp: 略过目录 “www.linuxidc.com”

    参数给加上一个-r复制
    cp -r www.linuxidc.com /usr/share/backgrounds/

4. 创建软链接:
    具体用法是：ln -s 源文件 目标文件。
    例如：ln -s /bin/less /usr/local/bin/less

6. 创建目录A并创建目录A的子目录B:
    mkdir -p 目录A/子目录B
    
7. 查看系统是32位还是64位:
    getconf LONG_BIT

2. 无组用户添加组:
    usermod -a -G apache cnzhx

3. centos中查看用户和用户组的命令
   用户列表文件：/etc/passwd
   用户组列表文件：/etc/group
   查看系统中有哪些用户：cut -d : -f 1 /etc/passwd
   查看可以登录系统的用户：cat /etc/passwd | grep -v /sbin/nologin | cut -d : -f 1
   查看用户操作：w命令(需要root权限)
   查看某一用户：w 用户名
   查看登录用户：who
   查看用户登录历史记录：last

4. 杀死所有httpd进程:
    killall httpd
    
5. 查看整个硬盘的使用状况，硬盘空间
    df -hv
    
6. 查看当前服务器所有磁盘使用率:
    df -h

7. 查看当前文件夹下子文件夹大小:
    du -s -h ./*
    
8. 压缩文件夹:
    tar -zcvf x.tar.gz x
    参考: http://www.kryptosx.info/archives/366.html
9. 解压文件:
    1. tar zxvf FileName.tar.gz
    2. 参考: http://www.cnblogs.com/eoiioe/archive/2008/09/20/1294681.html
10. ls显示文件大小时显示单位
    ls -lh
    参考：http://www.linuxidc.com/Linux/2014-03/98192.htm
    
11. yum卸载已经安装的软件：
    yum remove -y test
    参考：http://www.centoscn.com/CentOS/help/2014/0925/3845.html
    
### yum安装xtrabackup:
    1. yum install http://www.percona.com/downloads/percona-release/redhat/0.1-3/percona-release-0.1-3.noarch.rpm
    2. yum list | grep percona
    3. yum install percona-xtrabackup-22
    参考：https://www.percona.com/doc/percona-xtrabackup/2.2/installation/yum_repo.html