1. 下载源码:
    git clone https://github.com/vim/vim.git
2. 编译:
    cd src
    make distclean  # if you build Vim before
    make
    sudo make install
    
3. 安装powerline主题:
    git clone git://github.com/jeremyFreeAgent/oh-my-zsh-powerline-theme ~/.ohmyzsh-powerline
    cd .ohmyzsh-powerline/
    ./install_in_omz.sh
    
4. vim .zshrc
5. ZSH_THEME="powerline"
6. 安装powerline字体:
    git clone git://github.com/powerline/fonts ~/.powerline_fonts
    cd ~/.powerline_fonts
    ./install.sh
    
7. 安装自动提示:
    git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
    vim ~/.zshrc
    plugins=(git zsh-autosuggestions)
    
8. vim bundle 命令:
    normal模式输入 :BundleInstall 安装插件
    normal模式输入 :BundleUpdate 更新插件
    normal模式输入 :BundleClean  清除不再使用的插件
    normal模式输入 :BundleList   列出所有插件
    normal模式输入 :BundleSearch 查找插件
    
    normal模式输入 :NERDTree 显示文件管理侧边栏
    
9. 安装ruby坏境:
    yum install ruby-devel.x86_64
    参考: http://stackoverflow.com/questions/14258041/cant-build-vim-with-ruby-and-python-support
10. if_perl.xs:57:20: 致命错误：EXTERN.h：没有那个文件或目录
    yum install perl-ExtUtils-Embed
    参考: http://tieba.baidu.com/p/4471948063
11. 删除旧的vim
12. 重新编译,添加python支持:
    ./configure --with-features=huge \
    --enable-rubyinterp  \
    --with-ruby-command=/usr/bin/ruby \
    --enable-pythoninterp \
    --with-python-config-dir=/usr/lib64/python2.7/config \
    --enable-perlinterp \
    --with-x \
    --enable-gui=gtk2 \
    --enable-cscope \
    --enable-luainterp \
    --enable-perlinterp \
    --enable-multibyte \
    --prefix=/usr \
    --enable-fail-if-missing
    参考: http://lastavenger.github.io/2015/07/02/install-vim-plugins.html
13. 有可能有旧文件的影响,需要删除编译缓存:
    出现错误: checking Ruby header files... not found; disabling Ruby
    make clean
    make && make install
14. count not configure lua:
    安装lua: yum install lua lua-devel -y
    安装luajit:
        wget http://luajit.org/download/LuaJIT-2.0.4.tar.gz
        tar -xzvf LuaJIT-2.0.4.tar.gz
        cd LuaJIT-2.0.4
        // 使用默认安装路径
        make
        sudo make install
    参考: http://blog.wuxu92.com/z-compile-vim-with-lua-support-in-centos-7/
15. 安装 YouCompleteMe:(vim必须开启python支持,重新编译)
    cd ~/.vim/bundle/YouCompleteMe
    javascript支持:
    ./install.py --tern-completer
    参考: http://valloric.github.io/YouCompleteMe/#fedora-linux-x64
        http://blog.wuxu92.com/z-compile-vim-with-lua-support-in-centos-7/
16. 获得指定程式的软链接:
    ls -l `which vi`
    参考: https://segmentfault.com/q/1010000003864578
