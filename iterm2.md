### 插件
1. $ git clone git://github.com/jeremyFreeAgent/oh-my-zsh-powerline-theme ~/.ohmyzsh-powerline
   $ cd .ohmyzsh-powerline/
   $ ./install_in_omz.sh
   
2. vim .zshrc
3. $ git clone git://github.com/powerline/fonts ~/.powerline_fonts
   $ cd ~/.powerline_fonts
   $ ./install.sh
   
### 安装

1. 安装:
    1. brew install coreutils
    2. mkdir ~/lib
       cd ~/lib
       git clone git@github.com:seebi/dircolors-solarized.git
       echo 'eval `gdircolors ~/lib/dircolors-solarized/dircolors.256dark`' >> ~/.zshrc