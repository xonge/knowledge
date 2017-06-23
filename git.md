1. 去掉不需要的commit，把下面数字个最前面的commit都去掉，win10上有效，但是风险未知

    ````bash
    git reset HEAD~5
    git add .
    git commit -am "Here's the bug fix that closes #28"
    git push --force
    ````
    
    [参考：阮一峰的blog](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)