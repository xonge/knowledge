1. 安装:
    yum groupinstall "Development Tools"
    yum install gettext-devel openssl-devel perl-CPAN perl-devel zlib-devel
2. git源码地址:
    https://github.com/git/git/archive/master.zip
3. 预编译:
    make configure
    ./configure --prefix=/usr/local
    make install
    git --version
4. git设置:
    git config --global user.name "xonge"
    git config --global user.email "xonge007x@gmail.com"
    git config --list
    
5. 下载js的源码:
    git clone git://github.com/ariya/phantomjs.git
    
6. sudo yum -y install gcc gcc-c++ make flex bison gperf ruby \
     openssl-devel freetype-devel fontconfig-devel libicu-devel sqlite-devel \
     libpng-devel libjpeg-devel
     
7. git clone git://github.com/ariya/phantomjs.git
   cd phantomjs
   git checkout 2.1.1
   git submodule init
   git submodule update
8. python build.py