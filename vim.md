1. 在vim中快速复制粘贴多行
   工具控 · feitian124 · 于 3 年前发布 · 最后由 xihuiliang 于 1 年前回复 · 31658 次阅读
   1141
   用vim写代码时，经常遇到这样的场景，复制多行，然后粘贴。
   我现在这样做：
   1. 将光标移动到要复制的文本开始的地方，按v进入可视模式。
   2. 将光标移动到要复制的文本的结束的地方，按y复制。此时vim会自动将光标定位到选中文本的开始的地方，并退出可视模式。
   3. 我移动光标到文本结束的地方，按p粘贴。
   
   我现在想知道，有没有什么命令，可以改变第3步，也就是说，我在可视模式复制时，vim退出可视模式时，是将光标定位到选中文本的末尾，而不是开始。
   
   谢谢。
   参考: https://ruby-china.org/topics/4266
   
2. d回车
   删除2行

常用的快捷键：
Ctrl + d        删除一个字符，相当于通常的Delete键（命令行若无所有字符，则相当于exit；处理多行标准输入时也表示eof）
Ctrl + h        退格删除一个字符，相当于通常的Backspace键
Ctrl + u        删除光标之前到行首的字符
Ctrl + k        删除光标之前到行尾的字符
Ctrl + c        取消当前行输入的命令，相当于Ctrl + Break
Ctrl + a        光标移动到行首（Ahead of line），相当于通常的Home键
Ctrl + e        光标移动到行尾（End of line）
Ctrl + f        光标向前(Forward)移动一个字符位置
Ctrl + b        光标往回(Backward)移动一个字符位置
Ctrl + l        清屏，相当于执行clear命令
Ctrl + p        调出命令历史中的前一条（Previous）命令，相当于通常的上箭头
Ctrl + n        调出命令历史中的下一条（Next）命令，相当于通常的上箭头
Ctrl + r        显示：号提示，根据用户输入查找相关历史命令（reverse-i-search）

次常用快捷键：
Alt + f         光标向前（Forward）移动到下一个单词
Alt + b         光标往回（Backward）移动到前一个单词
Ctrl + w        删除从光标位置前到当前所处单词（Word）的开头
Alt + d         删除从光标位置到当前所处单词的末尾
Ctrl + y        粘贴最后一次被删除的单词

1. yaw 复制单词
    参考: http://blog.csdn.net/riag/article/details/4184133
2. yy 复制整行
3. p 粘贴
    参考: http://ks2144634.blog.163.com/blog/static/1335855032012102963135353/
    http://blog.csdn.net/tsuliuchao/article/details/8131537
