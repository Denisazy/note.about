# Git使用记录
#Coding/Git

* `Git pull` 之后如何恢复到原来的版本：
`git reflog` 查看历史变更记录
`Git reset - - hard HEAD@{n} ` 注意：n是你要回退到的引用位置

* 从远程仓库拉取一条本地不存在的分支：
```
git checkout -b 本地分支名 origin/远程分支名
```

* `git clone`指定分支：
`Git clone -b 指定分支名字  远程仓库链接`

* 如何创建一个远程分支 [How do you create a remote Git branch?](https://stackoverflow.com/questions/1519006/how-do-you-create-a-remote-git-branch) 
First, you create your branch locally:
`git checkout -b <branch-name>   # Create a new branch and check it out`
The remote branch is automatically created when you push it to the remote server. So when you feel ready for it, you can just do:
`git push <remote-name> <branch-name> `
简单来说就是先本地创建，然后直接提交

* 查看分支
`git branch `查看本地分支
`Git branch -a` 查看所有分支
`Git branch -r` 查看远程分支

* 提交步骤
```
Git status
Git  add .    //add all
Git commit -m “something”
Git  pull origin develop    //拉取远程更新
Git push origin develop    //push到远程
```

* 局部提交
```
git status
git add 
git stash -u -k
git commit -m ""
git pull origin develop
git push origin develop
git stash pop
```