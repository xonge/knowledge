1. 去掉不需要的commit，把下面数字个最前面的commit都去掉，win10上有效，但是风险未知

    ````bash
    git reset HEAD~5
    git add .
    git commit -am "Here's the bug fix that closes #28"
    git push --force
    ````
    
    [参考：阮一峰的blog](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)
    
### 下载地址:
    http://git-scm.com/downloads
1. 基本配置:
    git config --global user.name "fuck"
    git config --global user.email "fuck@fff.com"
   
2. 生成公钥:
    ssh-keygen -t rsa -C "fuck@fff.com"

3. 连接git服务器测试:
    ssh -T git@git.oschina.net
   
3. 在xx文件里面添加:
    host github
    hostname github.com
    user git
    identityfile ~/.ssh/id_rsa
    port 22
    
4. 创建新的仓库: Create a new repository
    ```git
    mkdir fromai_cn
    cd fromai_cn
    git init
    touch README.md
    git add README.md
    git commit -m "first commit"
    git remote add origin git@git.xxx.cn:develper/xxx_cn.git
    git push -u origin master
    ```
5. 提交已经存在的仓库:   Push an existing Git repository
    ```git
    cd existing_git_repo
    git remote add origin git@git.xxxx.cn:develper/xxx_cn.git
    git push -u origin master
    ```

6. git remote -v
7. 新建远程分支(本地必须有分支):
    git push origin payment:payment
7. 删除远程分支:
    git branch -r -d origin/payment git push origin :payment
7. 克隆远程仓库到本地:
    git clone http://git.oschina.net/xxxxxx/xxxxxx.git
8. 新建分支并且切换到新的分支:
    git checkout -b $feature_name
9. 提交所有文件:
    git commit -am "My feature is ready"
10. 提交到远程仓库:
    git push origin $feature_name

11. git clone --bare  https://github.com/bartaz/impress.js.git
12. cd impress.js.git
    git push --mirror git@git.oschina.net:username/impress-js.git
    
13. git filter-branch --tree-filter 'rm -f path/to/large/files' --tag-name-filter cat -- --all
    git push origin --tags --force
    git push origin --all --force
    
14. 1）创建git配置文件，或者叫库文件
    使用命令：git init
    完成以后，可以在HRString文件夹里面看到一个.git文件，默认是隐藏文件。
    
    2）把当前所有文件加入到本地git库中
    使用命令： git add .
    3）确认加入文件到本地git库
    使用命令：git commit -m '写一些注释'
    4）把本地项目与远程git库关联
    使用命令：git remote add origin git@github.com:henryrao/HRString.git
    5)提交本地库中的文件到远程git库中
    使用命令：git push -u origin master
    git push -f origin master
    
15. 如果希望保留生产服务器上所做的改动,仅仅并入新配置项, 处理方法如下:
    git stash
    git pull
    git stash pop
    然后可以使用git diff -w +文件名 来确认代码自动合并的情况.
    
16. 2.2 添加提交信息
    
       　　如果直接运行 git commit (-a) 则会默认使用 vi 添加描述。也可以使用 git config --global core.editor 命令更改为你喜欢的编辑器。还有一个方法就是使用 -m 选项直接添加提交信息。
    
       $git commit -a -m "commit info"
     
17. git branch -a
17. 或者使用-t参数，它默认会在本地建立一个和远程分支名字一样的分支
    折叠展开复制代码
    
    $ git checkout -t origin/python_mail.skin
    
18. git不再监视指定文件
    git rm --cached test.txt
    add test.txt to .gitignore file
    git commit -m 'i all ignore my some files' -a
    
19. git 恢复单个文件的历史版本
    首先查看该文件的历史版本信息：git log Default@2x.png
    
    记录下需要恢复的commit版本号：如 9aa51d89799716aa68cff3f30c26f8815408e926
    
    恢复该文件：git reset 9aa51d89799716aa68cff3f30c26f8815408e926 Default@2x.png
    
    提交git:git commit -m "revert old file"
    
20. 获得最近改变的文件:
    git log -p -2
    
21. 
    ssh-keygen -t rsa -b 4096 -C "fuck@fff.com"
    /root/.ssh/forgithub
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/forgithub
    vi ~/.ssh/forgithub.pub
    
    git clone git@github.com:inconshreveable/ngrok.git
    
    openssl genrsa -out rootCA.key 2048
    openssl req -x509 -new -nodes -key rootCA.key -subj "/CN=ngrok.github.xyz" -days 5000 -out rootCA.pem
    openssl genrsa -out device.key 2048
    openssl req -new -key device.key -subj "/CN=ngrok.github.xyz" -out device.csr
    openssl x509 -req -in device.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out device.crt -days 5000
    
    cp rootCA.pem assets/client/tls/ngrokroot.crt
    cp device.crt assets/server/tls/snakeoil.crt
    cp device.key assets/server/tls/snakeoil.key
    
    make release-server
    
112. 当前分支关联远程分支
    git remote add origin git@github.com:yourName/yourRepo.git
    git branch -u origin/serverfix
    参考资料: https://git-scm.com/book/it/v2/Git-Branching-Remote-Branches
113. 关于git pull的问题，如何在不commit的前提下pull回来？
    git stash
    git pull
    git stash pop
    
114. git忽略掉已经追踪的文件：
    git update-index --assume-unchanged logs/*.log
    参考：https://segmentfault.com/q/1010000000430426
    git update-index --no-assume-unchanged angular/index.modules.js // 重新索引
    参考：https://git-scm.com/docs/git-update-index
    
115. git clone git@git.coding.net:fuck/fff.git "/data/wwwroot/fff"

116. 查看文件提交记录：https://segmentfault.com/q/1010000000126341

    git log --follow -p bower.json