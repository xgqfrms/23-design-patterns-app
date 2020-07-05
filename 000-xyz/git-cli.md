## git cli 


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

# ❌ delete remote brach bug, if only `:<remote-branch-name>` 
$ git push origin :dev


```

https://tecadmin.net/how-to-create-a-branch-in-remote-git-repository/

https://stackoverflow.com/questions/1519006/how-do-you-create-a-remote-git-branch


