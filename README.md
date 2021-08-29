# git clone all repos at once from github, if the repos has been downloaded, i will exec git pull to get latest code

# 1. install

```bash
npm install
```

# 2. mkdir .env file

- https://github.com/settings/tokens

```yaml
access_token = your_access_token
# name is your orgs_name or user_name, default is devsapp
name = devsapp
# type is orgs or users, default is orgs
type = orgs
```

# 3. exec get-all-repos.js, path is your download path

```bash
node get-all-repos.js --path ~/workspace
```
