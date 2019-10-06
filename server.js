'use strict';

require('dotenv').config();

const server = require('./routes/controller.js');
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`)
})