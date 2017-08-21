1. 解决Mac外接显示器字体模糊的问题:
    Mac外接显示器时，除非接的是Apple自家的显示器“ACD”，不然一般会遇到字体模糊发虚的问题。在终端中执行命令:
    
    shell command:
    defaults -currentHost write -globalDomain AppleFontSmoothing -int 2
    可以使用1到3作为该命令的最后一个参数，表示字体平滑渲染的强度。如果要恢复默认设置：
    
    shell command:
    defaults -currentHost delete -globalDomain AppleFontSmoothing
    参考: http://liuxiang.logdown.com/posts/153620-solve-the-mac-fonts-on-the-external-monitor-fuzzy-problem