1. autojump [github](https://github.com/wting/autojump)

2. 安装

    ````bash
    git clone git://github.com/joelthelion/autojump.git
    cd autojump
    ./install.py or ./uninstall.py
    如果使用zsh，还要在~/.zshrc里加上
    [[ -s /home/vagrant/.autojump/etc/profile.d/autojump.sh ]] && source /home/vagrant/.autojump/etc/profile.d/autojump.sh
    autoload -U compinit && compinit -u
    ````