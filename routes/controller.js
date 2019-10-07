'use strict';

const http = require('http');
const url = require('url');

const app = http.createServer((req, res) => {
  const service = require('../services/service.js')
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/rooms' && req.method === 'GET') {
    service.getRooms(req, res);
  } else if (reqUrl.pathname === '/room' && req.method === 'GET') {
    service.getOneRoom(req, res);
  } else {
    service.invalidRequest(req, res);
  }

})

module.exports = app;