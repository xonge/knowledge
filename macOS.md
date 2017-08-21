### 常用命令
1. shasum -a 256 ./vagrant_1.8.1.dmg
2. openssl dgst -sha256 ./vagrant_1.8.1.dmg
3. zsh下使用finder打开指定路径:
    open ./
    
### 安装composer
mac 安装composer的方法
Created2015-08-23   Views 874    Author 懒人程序
打开命令后
cd /usr/local/bin
然后执行
curl -sS https://getcomposer.org/installer | php
接下来
sudo mv composer.phar composer
修改权限
sudo chmod a+x composer
 
### 安装homestead
0. 参考 https://laravel.com/docs/5.2/homestead#first-steps
1. 下载安装 virtualbox pkg文件
2. 下载安装 vagrant dmg文件解压后是pkg文件
3. 下载安装homestead box:
    vagrant box add laravel/homestead
4. 下载配置系统
    git clone https://github.com/laravel/homestead.git Homestead
    cd Homestead
    bash init.sh

### 安装mysql
chown -R mysql:mysql /usr/local/mysql/data
sudo chmod -R 777 /usr/local/mysql/data
bin/mysqld --initialize --user=mysql
ps -ef|grep mysqld
support-files/mysql.server start
support-files/mysql.server status
support-files/mysql.server stop
bin/mysqladmin -u root password 123456asd

1. 切换窗口的app:
    官网: https://contexts.co/
    右侧会有小图标,不是很喜欢,最好能固定,在我的电脑上是command+数字键,数字不固定。
2. 切换输入法快捷键设置:
    默认是没有启用快捷键切换输入法的。在 System Preferences / Keyboard / Keyboard Shortcuts / Keyboard & Text Input 里面勾选 Select next source in Input menu，然后点击定义快捷键。我一般设置的是 Ctrl + Space （和 Windows 下类似）。
    我自己的换成了control+command+space
    
5. iterm2 显示 bogon：
    sudo hostname llqfront
    sudo scutil --set LocalHostName $(hostname)
    sudo scutil --set HostName $(hostname)
    参考：http://mamicode.com/info-detail-1035140.html
        https://yq.aliyun.com/articles/145
        http://dby.github.io/2015/01/18/mac%E7%BB%88%E7%AB%AF%E4%B8%AD%E7%A5%9E%E7%A7%98%E7%9A%84bogon/
        http://www.cnblogs.com/qyf404/p/5072609.html
        https://air20.com/archives/486.html
    我修改了 hosts 文件，修改了dns，执行了命令
    
### 开发
1. brew osx包管理器
	http://brew.sh/index_zh-cn.html

2. iterm2 bash加强版

3. Alfred2 工作流

4. dash 需要购买 24.9美元

2.1 将功能键(F1-F12)设置为标准的功能键

2.2 设置Trackpad（触摸板）轻触为单击

2.3 将Dock停靠在屏幕左边

2.4 全键盘控制模式

vim ~/.zshrc

zsh --version

用VIM编辑文件 ：q 无法退出 出现NO write since last change (add !to override)
	q!

修改hosts文件:
    sudo vi /etc/hosts
    
### homebrew
1. 介绍：
    http://wildjcrt.pixnet.net/blog/post/29182044-the-naming-logic-from-homebrew 值得一看，有趣
2. 错误：
     SSL read: error:00000000:lib(0):func(0):reason(0), errno 54
     https://curl.haxx.se/libcurl/c/libcurl-errors.html
        CURLE_SSL_ENGINE_SETFAILED (54)
        Failed setting the selected SSL crypto engine as default!
     brew update --with-brewed-curl --with-brewed-openssl
     
### valet 使用7.1
1. 参照：https://laravel-news.com/laravel-valet-php-7-1
    valet stop
   valet uninstall
   composer global require laravel/valet
   // brew uninstall --force php70-xdebug 可能要先卸载xdebug，有依赖关系
   brew uninstall --force php70
   valet install
   valet restart
   // brew install php71-xdebug 重新安装xdebug