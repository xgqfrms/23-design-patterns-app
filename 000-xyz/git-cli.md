# git cli 


## git create remote branch

```sh
# Create a new branch and check it out
$ git checkout -b <branch-name>

# The remote branch is automatically created when you push it to the remote server. 
# <remote-name> is typically origin
$ git push <remote-name> <branch-name> 

$ git push <remote-name> <local-branch-name>:<remote-branch-name>

$ git push --set-upstream <remote-name> <local-branch-name> 

```

```sh
# create a new branch & check it out
$ git checkout -b test

# local & remote  with the same name
$ git push origin test

# local & remote with a different name
$ git push origin test:dev

# ❌ delete remote branch bug, if only `:<remote-branch-name>` 
$ git push origin :dev


# delete remote branch 💩⚠ ❌
$ git push origin --delete test
# OR
$ git push origin :test

```

https://tecadmin.net/how-to-create-a-branch-in-remote-git-repository/

https://stackoverflow.com/questions/1519006/how-do-you-create-a-remote-git-branch


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
