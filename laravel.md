1. laravel eloquent NULL
    
    model把一个字段设置NULL，只要在save之前把字段设置null即可。
    
2.  laravel5.3软删除

    ````
    <?php
    
    namespace App\Model\Backend;
    
    use App\Http\Response;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\SoftDeletes;
    use Request;
    
    class User extends Model
    {
        use SoftDeletes;
    
        protected $table = 'users'; //表名
        protected $primaryKey = 'id'; //主键
        protected $datas = ['deleted_at'];
    ````
    
    [参考](http://blog.csdn.net/zy994914376/article/details/54891096)
    
### mix

1. 如果我在homestead里面运行 npm run watch，然后在本地修改文件，homestead无法侦测到宿主机器上的文件修改，而在homestead里面直接修改是可以侦测到的。
https://github.com/paulmillr/chokidar
usePolling: true就可以了。

2. homestead 的ssh账号 vagrant/vagrant，想直接ftp去修改homestead上面的文件，然而上传后会清空文件内容，原因不明。

3. nodejs下载地址：https://nodejs.org/en/download/

4. TypeError: mix.browserSync is not a function
如果你的mix是0.6 就升级到0.8
https://github.com/JeffreyWay/laravel-mix/issues/483

5. https://github.com/laravel/laravel/blob/master/package.json

6. https://github.com/JeffreyWay/laravel-mix

7. https://laravel.com/docs/5.4/mix

8. https://browsersync.io/docs/options

9. --no-bin-links

### composer 运行过程错误

1. laravel新建应用报错：The Process class relies on proc_open, which is not 

    ````
    解决方法：
    打开php.ini，并搜索disable_functions指令，找到类似如下内容：
    disable_functions = passthru,exec,system,chroot,scandir,chgrp,chown,shell_exec,proc_get_status,popen,ini_alter,ini_restore,dl,openlog,syslog,readlink,symlink,popepassthru,stream_socket_server
    找到proc_open并删除即可。
    ````
    
    [参考](http://www.shikezhi.com/html/2015/php_1224/713776.html)
    
### 开发环境

#### laradock

1. [github](https://github.com/LaraDock/laradock)

2. [官方文档](http://laradock.io/documentation/#mysql-root-access)

3. 无法连接mysql数据库

    ````
    docker exec -it [container_id] bash
    ip addr // 找到当前容器的ip，然后修改.env的DB_HOST
    ````
    [issues](https://github.com/laradock/laradock/issues/610)
  
4. docker-compose up 无法启动mysql

    ````
    // 注释掉
    # build:
    
     # context: ./mysql
      image: mysql:5.7
       environment:
        - MYSQL_DATABASE=${MYSQL_DATABASE}
        - MYSQL_USER=${MYSQL_USER}
        - MYSQL_PASSWORD=${MYSQL_PASSWORD}
        - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
      # volumes:
        # - ${DATA_SAVE_PATH}/mysql:/var/lib/mysql
        # - ./mysql/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d
      ports:
        - "${MYSQL_PORT}:3306"
      networks:
        - backend
    ````
    [issues](https://github.com/laradock/laradock/issues/952)
    
    
### laravel-admin
1. 创建和model结合的控制器

    ````bash
    php artisan admin:make UniversityController --model=App\\University
    ````
    
    
### 错误

1. php下关于Cannot use a scalar value as an array的解决办法
    
    尝试对一维数组进行索引赋值，例如 $arr['ggg'] = 'ggghh';
