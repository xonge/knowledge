1. yum install libxml2 libxml2-devel openssl openssl-devel bzip2 bzip2-devel libcurl libcurl-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel gmp gmp-devel libmcrypt libmcrypt-devel readline readline-devel libxslt libxslt-devel
2. wget http://php.net/distributions/php-7.0.8.tar.gz
3. tar -xvzf php-7.0.8.tar.gz
4. ./configure \
   --prefix=/usr/local/php \
   --with-config-file-path=/etc \
   --enable-fpm \
   --with-fpm-user=nginx  \
   --with-fpm-group=nginx \
   --enable-inline-optimization \
   --disable-debug \
   --disable-rpath \
   --enable-shared  \
   --enable-soap \
   --with-libxml-dir \
   --with-xmlrpc \
   --with-openssl \
   --with-mcrypt \
   --with-mhash \
   --with-pcre-regex \
   --with-sqlite3 \
   --with-zlib \
   --enable-bcmath \
   --with-iconv \
   --with-bz2 \
   --enable-calendar \
   --with-curl \
   --with-cdb \
   --enable-dom \
   --enable-exif \
   --enable-fileinfo \
   --enable-filter \
   --with-pcre-dir \
   --enable-ftp \
   --with-gd \
   --with-openssl-dir \
   --with-jpeg-dir \
   --with-png-dir \
   --with-zlib-dir  \
   --with-freetype-dir \
   --enable-gd-native-ttf \
   --enable-gd-jis-conv \
   --with-gettext \
   --with-gmp \
   --with-mhash \
   --enable-json \
   --enable-mbstring \
   --enable-mbregex \
   --enable-mbregex-backtrack \
   --with-libmbfl \
   --with-onig \
   --enable-pdo \
   --with-mysqli=mysqlnd \
   --with-pdo-mysql=mysqlnd \
   --with-zlib-dir \
   --with-pdo-sqlite \
   --with-readline \
   --enable-session \
   --enable-shmop \
   --enable-simplexml \
   --enable-sockets  \
   --enable-sysvmsg \
   --enable-sysvsem \
   --enable-sysvshm \
   --enable-wddx \
   --with-libxml-dir \
   --with-xsl \
   --enable-zip \
   --enable-mysqlnd-compression-support \
   --with-pear \
   --enable-opcache
5. make && make install
6. PATH=$PATH:/usr/local/php/bin
   export PATH
7. cp php.ini-production /etc/php.ini
   cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
   cp /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf
   cp sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
   chmod +x /etc/init.d/php-fpm
8. /etc/init.d/php-fpm start
    参考资料: http://www.jianshu.com/p/246ffcd5e77d
    
    命令行
    显示所有进程:
    ps -A
    ps -aux 所有用户的进程 包括进程所属用户
    
9. php-fpm启动:
    桑蚕服务器上有php5.2和php7两个版本,我是直接运行 php-fpm 启动
10. 检查php-fpm配置文件是否正常:
    php-fpm -t