const fs = require('fs');
const rp = require('request-promise');

const config = require('./config.json')

const Mfiles = require('../index.js')
const mfiles = new Mfiles({
  vault_guid: config.vault_guid,
  vault_url: config.vault_url
});

(async () => {
  await mfiles.auth({ username: config.username, password: config.password })

  let results = (await mfiles.getRecentlyAccessedByMe());
  fs.writeFileSync('./dist/recently_accessed_by_me.json', JSON.stringify(results, null, 2));
})();