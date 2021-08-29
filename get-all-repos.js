const got = require("got");
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs-extra");
const argv = require("minimist")(process.argv.slice(2));
const p = argv.p || argv.path || process.cwd();
require("dotenv").config();

(async () => {
  // https://github.com/settings/tokens

  // type should be orgs or users, name is your orgs_name or user_name
  const { access_token, type = "orgs", name = "devsapp" } = process.env;
  let page = 1;
  let data = [];
  let condition = false;
  console.log("start...");

  do {
    const url = `https://api.github.com/${type}/${name}/repos?access_token=${access_token}&per_page=100&page=${page}`;
    const res = await got(url);
    const body = JSON.parse(res.body);
    condition = body.length > 0;
    data = data.concat(body);
    page++;
  } while (condition);

  console.log(`get data length: ${data.length}`);
  const cwd = path.join(p, name);
  fs.ensureDirSync(cwd);

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const apath = path.join(cwd, element.name);
    console.log(`progress: ${index}/${data.length}`);
    if (fs.existsSync(apath)) {
      console.log(`git pull ${element.name}...`);
      execSync(`git pull`, { cwd: apath });
      continue;
    }
    execSync(`git clone ${element.ssh_url}`, { cwd });
  }

  console.log("done");
})();
