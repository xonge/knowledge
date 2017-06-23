1. 添加 fileinfo 扩展
 
    执行./addons.sh 选择4 安装fileinfo即可
    
    [参考](https://oneinstack.com/question/oneinstack-how-to-support-the-fileinfo/)
    

### composer

#### centos

1. 全局安装

    ````bash
    mv composer.phar /usr/local/bin/composer
    ````
    
    [参考](https://getcomposer.org/doc/00-intro.md#globally)
    
### 备份数据库和网站文件

1. 备份数据库和网站文件

    ````bash
    cd oneinstack
    ./backup_setup.sh
    ./backip.sh
    ````
    或者使用cron定时备份
    ````
    # crontab -l # Examples 
    0 1 * * * cd ~/oneinstack;./backup.sh  > /dev/null 2>&1 &
    ````

    [参考：oneinstack官方文档](https://oneinstack.com/install/)