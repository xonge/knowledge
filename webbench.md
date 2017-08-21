1. brew install ctags # 依赖安装
   wget http://blog.zyan.cc/soft/linux/webbench/webbench-1.5.tar.gz
   tar -zxvf webbench-1.5.tar.gz
   cd webbench-1.5
   mkdir -pv /usr/local/man/man1 # 关键
   sodu make && sudo make install # sudo 权限因为需要创建文件夹