'use strict';

const app = require('./app');
const port = 3000;

const server = app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

module.exports = server;
