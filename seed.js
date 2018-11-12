const db = require('./models');

(async () => {
  db.sync({force: true})
  .then(_ => console.log('Synced!'))
  .catch(err => console.error(err))
  .finally(_ => db.close());
})();


