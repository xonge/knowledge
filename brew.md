## 开发
### redis
1. 安装 redis:
    1. brew install redis
    2. 启动: brew services start redis // 6379
    3. composer require predis/predis 
1. 查看 redis 的启动方式:
    1. brew info redis
    2. brew service redis start
    
## 娱乐
### 安装 mpv
brew install mpv --with-bundle
brew linkapps mpv

## 额外
3. 空格图片预览显示尺寸和大小:
    brew cask install qlimagesize
    
4. 为了升级brew：
    sudo chown -R $(whoami) /usr/local 
    升级以后：
    sudo chown root:wheel /usr/local
    
### 路径
1. php

    vi /usr/local/etc/php/7.1/conf.d/ext-xdebug.ini
    
    ls /usr/local/Cellar/php71-xdebug/2.5.0/xdebug.so
    