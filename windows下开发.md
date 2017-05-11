### 正在使用的开发软件

1. vscode [下载地址](https://code.visualstudio.com/docs?start=true)

2. zeal 文档查询工具 [下载地址](https://zealdocs.org/download.html#windows)

3. sumatrapdf pdf阅读工具 [下载地址](http://www.sumatrapdfreader.org/free-pdf-reader.html)

4. ditto 粘贴板增强 [官网](http://ditto-cp.sourceforge.net/)

5. seer 类似macOS的空格预览软件 [官网](http://1218.io/) [下载地址](https://sourceforge.net/projects/ccseer/?source=typ_redirect)

### win10 下使用 homestead

#### 让 phpstorm 的按钮能够识别 vagrant up。

1. 

2. 按照 https://getcomposer.org/download/ 安装composer，php需要开启 openssl，在php.ini里面配置.
    
    1. 会出现错误：http://blog.51yip.com/linux/1379.html
    2. php.ini 配置 openssl 参考：http://www.jb51.net/article/50173.htm
    
3. 在 d:\dev 下执行：

    1. composer require laravel/homestead --dev
    2. vendor\\bin\\homestead make
    3. 把 Homestead.yaml 和 Vagrantfile 拷贝到项目根目录，两个文件都需要适当修改。