1. 搜索xdebug:
    brew search xdebug
    brew info mysql //查看包的依赖
2. 安装xdebug:
    brew install homebrew/php/php70-xdebug
    安装好之后会自动建立xdebug.ini,只需要自己配置一下选项
3. 编辑xdebug.ini:
    vi /usr/local/etc/php/7.0/conf.d/ext-xdebug.ini
    添加:
    ```ini
        xdebug.remote_enable=1
        xdebug.remote_connect_back = 1
        xdebug.remote_port=9009
        xdebug.idekey=PHPSTORM
    ```
    valet restart
    
4. mac下brew安装的php7在:
    /usr/local/Cellar/php70/7.0.7/bin/php
    
5. 查看xdebug配置项:
    php -i | grep xdebug
6. valet无法定位到断点位置: (取消掉Force break at the first line)
    In PHPStorm set debug port and disable “Force break at the first line
    
1. homestead中xdebug远程调试:
    在homestead中修改php.ini:
        sudo vi /etc/php5/fpm/conf.d/20-xdebug.ini
        zend_extension=xdebug.so
        
        xdebug.remote_enable = 1
        xdebug.remote_connect_back = 1
        xdebug.remote_port = 9000
        xdebug.scream=0 
        xdebug.cli_color=1
        xdebug.show_local_vars=1
     我本机的9000端口被nginx抢了,改成9009
2. 安装chrome扩展 xdebug helper
    修改ide key 为PHPStorm
3. 在 language -> php -> servers里面添加:
    wedomall.app,需要映射本地目录和homestead中的目录
4. 不要选择 Break at first line,不然会在入口文件就开始debug
4. 参考: https://phphub.org/topics/553