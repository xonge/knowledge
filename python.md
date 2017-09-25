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
    
    
### 语法
1. python同时遍历数组的索引和元素


    l = [2,7,11,15]
    for index,value in enumerate(l):
        print index,value
        
参考：http://www.cnblogs.com/anyview/p/5609517.html

2. python中如何判断一个变量的数据类型


    isinstance(lst, list)
    True
    
参考：http://blog.csdn.net/suofiya2008/article/details/5587996

3. re.compile

    
    import re
    pattern = re.compile('[a-zA-Z]')
    result = pattern.findall('as3SiOPdj#@23awe')
    print result
    # ['a', 's', 'S', 'i', 'O', 'P', 'd', 'j', 'a', 'w', 'e']
    
参考：https://zhidao.baidu.com/question/175902248053786164.html

4. python之Queue

参考：http://www.cnblogs.com/xupeizhi/archive/2013/02/27/2935468.html

5. python使用正则表达式文本替换


    # encoding: UTF-8
    import re
     
    # 将正则表达式编译成Pattern对象
    p = re.compile(r'(?P<folder>(\w+/)*)(?P<filename>\w+\.png)')
     
    # 使用Pattern匹配文本，获得匹配结果，无法匹配时将返回None
    #match = pattern.match('<key>xxx/duobaojiemian_L/yangpizi.png</key>')
     
    the_str = """<key>XXXX/duobaojiemian2222_L/duobaojiemian_L/yangpizi.png</key> 
      <key>yangpizi2.png</key> 
      <key>yangpizi3.png</key> """
     
    for m in p.finditer(the_str):
      # 使用Match获得分组信息
      print m.groupdict()
     
    print '-------------------------------'
     
    #f = lambda m: m.group().find('XXXX/') == -1 and 'XXXX/'+m.group() or m.group()
    def f(m):
      s = m.group()
      return s.find('XXXX/') == -1 and 'XXXX/'+s or s
     
    def f2(m2):
      d = m2.groupdict()
      return d['folder']+'the_'+d['filename']
     
    print p.sub(f2, the_str)
    
参考：http://www.cnblogs.com/linbc/p/4298799.html

6. Python正则替换字符串函数re.sub用法示例

    
    #!/usr/bin/env python
    #encoding: utf-8
    import re
    url = 'https://113.215.20.136:9011/113.215.6.77/c3pr90ntcya0/youku/6981496DC9913B8321BFE4A4E73/0300010E0C51F10D86F80703BAF2B1ADC67C80-E0F6-4FF8-B570-7DC5603F9F40.flv'
    pattern = 'http://(.*?):9011/'
    out = re.sub(pattern, 'http://127.0.0.1:9091/', url)
    print out
    
参考：http://www.jb51.net/article/103559.htm