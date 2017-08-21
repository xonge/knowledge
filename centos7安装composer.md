1. 
    下载方法: https://getcomposer.org/download/
    mv composer.phar /usr/local/bin/composer
    chmod +x /usr/local/bin/composer
    
2. 安装 laravel:
    composer global require "laravel/installer"
    export PATH=$PATH:/root/.config/composer/vendor/bin
    laravel new laravel52