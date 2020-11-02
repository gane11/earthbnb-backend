const router = require('express').Router();

const routes = ['users', 'homes'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;