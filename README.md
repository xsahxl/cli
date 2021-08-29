# git clone all repos at once from github, if the repos has been downloaded, i will exec git pull to get latest code

# 1. install

```bash
npm install
```

# 2. mkdir .env file

- https://github.com/settings/tokens
- name is your orgs_name or user_name, default is devsapp
- type is orgs or users, default is orgs
- path is your download path, deault is process.cwd()

```yaml
access_token = your_access_token
name = devsapp
type = orgs # orgs or users
path = your_path
```

# 3. get all repos

```bash
npm run getAllRepos
```
