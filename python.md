### 环境安装

#### virtualenv

1. 使用 virtualenv

    pip install virtualenv // 安装

    virtualenv myenvironment // 创建虚拟工作环境
    
    source myenvironment/bin/activate  // 激活指定的虚拟工作环境
    
    deactivate // 关闭虚拟工作环境
    
#### virtualenvwrapper 管理虚拟工作环境的包 （推荐）

1. 安装 virtualenvwrapper：
    
    pip install virtualenvwrapper
    
2. source ~/.zshrc

2. 创建新的工作环境：

    mkvirtualenv myenvironment

3. 使用指定的虚拟环境：

    workon myenvironment

4. 列出所有虚拟环境：

    lsvirtualenv