### 编译安装：
1. http://blog.zhengshuiguang.com/php/php-ng.html
2. http://blog.csdn.net/shaobingj126/article/details/50482719
3. 编译libiconv解决./stdio.h:1010:1: 错误： ‘gets’未声明(不在函数内)
    cd srclib/
   sed -i -e '/gets is a security/d' ./stdio.in.h
   cd ../
   make
4. http://blog.csdn.net/shaobingj126/article/details/50483164

### 加解密
1. phpc.sinaapp.com 加密的解密方法:
    很简单，用类似phpjm的解密方式，替换掉_inc.php中最后一个return中的eval为print就出来了。
    http://blog.sina.cn/dpool/blog/ArtRead.php?nid=438310d50102v2ju&a_pos=1&f=3&oid=sina&vt=3

1. php内置函数解析url:
    ```php
    <?php
        $url = 'http://username:password@hostname/path?arg=value#anchor';
        print_r(parse_url($url));
    ?>
    ```
    
2. $_SERVER['DOCUMENT_ROOT']
3. 显示错误:
    1. ini_set('display_errors','1');
       error_reporting(E_ALL);
    2. 参考: http://haoyun.blog.51cto.com/2038762/1269299
4. $filename = '/path/to/foo.txt';
   
   if (file_exists($filename)) {
       echo "The file $filename exists";
   } else {
       echo "The file $filename does not exist";
   }
5.  function traverse($path = '.') {
                   $current_dir = opendir($path);    //opendir()返回一个目录句柄,失败返回false
                   while(($file = readdir($current_dir)) !== false) {    //readdir()返回打开目录句柄中的一个条目
                       $sub_dir = $path . DIRECTORY_SEPARATOR . $file;    //构建子目录路径
                       if($file == '.' || $file == '..') {
                           continue;
                       } else if(is_dir($sub_dir)) {    //如果是目录,进行递归
                           echo 'Directory ' . $file . ':<br>';
                           traverse($sub_dir);
                       } else {    //如果是文件,直接输出
                           echo 'File in Directory ' . $path . ': ' . $file . '<br>';
                       }
                   }
               }
               
               traverse('xxtt');
               
php curl 下载文件
http://www.jb51.net/article/66207.htm

php windows版本下载地址:
http://windows.php.net/download#php-7.0

php7启动内置服务器:
php -S localhost:8000

查看当前启用的配置文件：
php --ini

mongodb出现：
connection refused calling ismaster on '192.168.10.1:27017'

在homestead上一定要修改fpm文件夹下面的php.ini
extension=mongodb.so

homestead安装mongodb服务器和php的扩展：
https://github.com/zakhttp/Mongostead7
php7.1的话：
sudo curl -sS https://raw.githubusercontent.com/zakhttp/Mongostead7/master/mongoHomestead7.1.sh | sudo sh

laravel出现Class 'MongoDB\Driver\Manager' not found：
没有安装mongodb的php扩展

php 正则匹配img标签的src内容
$str = '<img width="100" src="1.gif" height="100">';
preg_match_all('/<img.*?src="(.*?)".*?>/is',$str,$array);
print_r($array);
参考：https://zhidao.baidu.com/question/1924297703211511747.html
PHP正则匹配img标签的正则 并获得alt属性的值
preg_match_all("/<img.*alt\=[\"|\'](.*)[\"|\'].*>/i","<img src=\"地址\" alt=\"alt\">",$match);
print_r($match);
参考：https://zhidao.baidu.com/question/473076155.html

包：
https://github.com/phpquery/phpquery
https://github.com/TobiaszCudnik/phpquery/blob/master/demo.php

crawler，laravel可用
http://symfony.com/doc/current/components/dom_crawler.html
别人博客的demo：http://www.mamicode.com/info-detail-1658453.html
官方文档：http://api.symfony.com/3.2/Symfony/Component/DomCrawler/Form.html