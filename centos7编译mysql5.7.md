1. 准备工作:
    yum -y install gcc gcc-c++ ncurses ncurses-devel cmake
2. 下载mysql源码:
    wget http://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.12.tar.gz
3. 下载boost源码:
    wget http://jaist.dl.sourceforge.net/project/boost/boost/1.61.0/boost_1_61_0.tar.gz
    
4. tar -zxvf boost_1_61_0.tar.gz

5. groupadd mysql && useradd -M -g mysql mysql

6. tar -xvzf mysql

7. make -j `grep processor /proc/cpuinfo | wc -l`

8. make install
9. chown -R mysql:mysql /usr/local/mysql

10. mysql 开机启动:
    /bin/cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
    chmod +x /etc/init.d/mysqld
    chkconfig --add mysqld
    chkconfig mysqld on
    
11. /usr/local/mysql/bin/mysqld --initialize-insecure --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data

12. dbrootpwd=oneinstack
    /usr/local/mysql/bin/mysql -e "grant all privileges on *.* to root@'127.0.0.1' identified by \"$dbrootpwd\" with grant option;"
    /usr/local/mysql/bin/mysql -e "grant all privileges on *.* to root@'localhost' identified by \"$dbrootpwd\" with grant option;"
    
    dbrootpwd=oneinstack
    /usr/local/mysql/bin/mysql -e "grant all privileges on *.* to root@% identified by \"oneinstack\" with grant option;"
    /usr/local/mysql/bin/mysql -e "grant all privileges on *.* to root@% identified by \"$dbrootpwd\" with grant option;"
    
    grant all privileges on *.* to root@'%' identified by oneinstack
    
    grant all privileges on *.* to root@'%' identified by "oneinstack"; dui
    
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
    
12. ip addr //centos7

13. yum update
    yum -y install python-setuptools python-setuptools-devel
    yum install libxml2-devel libxslt-devel python-devel -y
    yum install gcc libffi-devel openssl-devel -y
    yum install postgresql-devel
    
    pip install sentry
    
    export C_FORCE_ROOT="true"
    /usr/bin/sentry --config=/etc/sentry.conf.py celery worker -B
    
    <!--杀死所有进程-->
    killall httpd
    /etc/passwd 　　      //用户账户信息，可以看出用户名称 
    
14. yum install -y readline-devel.x86_64
    curl -O https://ftp.postgresql.org/pub/source/v9.5.1/postgresql-9.5.1.tar.gz
    adduser postgres
    tar -zxvf postgresql-9.5.1.tar.gz
    ./configure --prefix=/home/pgdb
    make
    make install
    chown -R postgres.postgres /home/pgdb/
    切换用户postgres
    su -l postgres
    #给个参考
    PGHOME=/home/pgdb
    export PGHOME
    PGDATA=$PGHOME/data
    export PGDATA
    PATH=$PATH:$HOME/.local/bin:$HOME/bin:$PGHOME/bin
    export PATH
    
    initdb -D /home/pgdb/data
    pg_ctl start -l <logfile>
    
    psql: could not connect to server: No such file or directory
        Is the server running locally and accepting
        connections on Unix domain socket "/var/run/postgresql/.s.PGSQL.5432"?
    psql -U postgres -h /home/pgdb // h参数指定socket目录
    
    Centos6修改sysctl.conf报错解决方法
    rm -f /sbin/sysctl 
    ln -s /bin/true /sbin/sysctl
    
    CREATE DATABASE exampledb OWNER dbuser;
    GRANT ALL PRIVILEGES ON DATABASE exampledb to dbuser;
    
    supervisord 提供了一个模板文件,执行下面shell文件或者输出到文件中，改改就可以用了
    echo_supervisord_conf > supervisord.conf  
    
    mysql -v 
    
10. 启动 expressjs:
    npm start
    forever stop ./bin/www
11. nodejs连接mysql:
    npm install mysql