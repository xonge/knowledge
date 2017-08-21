### 针对 mac 和android开发
1.  安装node和watchman
    brew install node
    brew install watchman
    
2. 安装rn的命令行软件
    npm install -g react-native-cli
    
3. ~/.zshrc
    export ANDROID_HOME=~/Library/Android/sdk
    export PATH=${PATH}:${ANDROID_HOME}/tools
    export PATH=${PATH}:${ANDROID_HOME}/platform-tools
    
4. android avd

### genymotion

    先要安装genymotion
    
    启动模拟器
    
    执行 adb devices 查看当前运行的模拟器
    
    react-native start （非必须，react-native run-android 会自动执行这个）

    android版本4.1.1打开app会一片空白，4.4.4 就不会。原因不名。

    然后运行 react-native run-android （前提是你已经安装好reactnatvie）
    
    修改代码后，在模拟器上双击r键重新加载app。
    
    或者在右侧栏启用热加载
    
    