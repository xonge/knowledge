1. 压缩文件夹:
    tar cvzf xxx.tar.gz xxx/
    
### 快捷键
1. ctrl+u 从光标处删到行头部
2. ctrl+w 从光标处删到单词头部

### 环境变量
1. 获取系统上的shell
    cat /etc/shells
2. 获取当前shell
    echo $SHELL
    echo $0
3. 把文件夹放到环境变量里面：（参考：https://github.com/itang/todo.itang.me/issues/45, http://www.360doc.com/content/10/0818/15/935385_46953760.shtml ）
    vi ~/.bashrc
    最后添加：
        export PATH="$PATH:/usr/local/php/bin"
        
### 文件权限
1. 其中a,b,c各为一个数字，分别表示User、Group、及Other的权限。
   　　r=4，w=2，x=1
   　　若要rwx属性则4+2+1=7；
   　　若要rw-属性则4+2=6；
   　　若要r-x属性则4+1=7。
   参考：http://blog.csdn.net/nzing/article/details/9166057
   
### alias

1. 命令使用别名 例如 gulp && gulp watch === gw http://blog.sina.com.cn/s/blog_517b43f70100yavr.html
    
    在 ~/.bashrc 中添加 alias gw='gulp && gulp watch', 然后 source ~/.bashrc
    
### 在指定文件夹下面查找指定的字符串，并且输出到文件
1. find ./angular/app/components| xargs grep -ri "this.API.all(" -n | tee ../r.txt