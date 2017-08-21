1. 升级php:
    1. ./upgrade.sh php 可以选择版本,会从官网下载源码编译
    2. 参考: http://lnmp.org/faq/lnmp1-2-upgrade.html
    
    
1. iptables开启端口

    iptables -I INPUT -p tcp --dport 8388 -j ACCEPT