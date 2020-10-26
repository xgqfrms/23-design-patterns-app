# 23 Design Patterns App

https://23-design-patterns-app.xgqfrms.xyz/

> 不同分支 git branch

```sh
# create branch
$ git branch web-app
$ git branch desktop-app
$ git branch rn-app
$ git branch flutter-app
$ git branch ssr-app
$ git branch pwa-app
$ git branch amp-app
$ git branch taro-app

# checkout branch
$ git checkout branch web-app
$ git checkout branch desktop-app
# react-native
$ git checkout branch rn-app
# flutter
$ git checkout branch flutter-app
$ git checkout branch ssr-app
$ git checkout branch pwa-app
$ git checkout branch amp-app
$ git checkout branch taro-app


```

## git

```sh
# list all branch(local)
$ git branch --list
$ git branch -l
# OR
$ git branch

# list all remote branches
$ git branch -a
# Q === quit

# create branch
# $ git checkout -b <branch_name>
$ git checkout -b test
# OR
# $ git branch <branch_name>
$ git branch test

# delete branch
# -d safe delete
# $ git branch -d <branch_name>
$ git branch -d test
# Deleted branch test (was 686c96b).

# -D force delete
# $ git branch -D <branch_name>
$ git branch -D test

# rename the current branch
# $ git branch -m <branch>
$ git branch -m test

# change branch
$ git checkout branch flutter-app

```

```sh
# creating remote branch

# Add remote repo to local repo config
# $ git remote add new-remote-repo https://github.com/user/repo.git
$ git remote add new-remote-repo https://github.com/xgqfrms/test.git

# push the test branch to new-remote-repo
$ git push <new-remote-repo> test

```

https://www.atlassian.com/git/tutorials/using-branches

```code
  flutter-app
  test
* master

```

```code
  flutter-app
  test
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/gh-pages
  remotes/origin/master

```
## web app

> React + Redux + TypeScript

## desktop app

> Electron

## react native app

> React Native

## flutter app

> Flutter + Dart

## SSR app / PWA app / AMP app

> Nest.js / Nuxt.js

## 小程序

> Taro

## app project content

1. menu / navigator
2. preview / details
3. codes
4. share

## 23 种设计模式 APP

https://www.cnblogs.com/xgqfrms/p/12904917.html

