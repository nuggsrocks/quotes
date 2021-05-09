const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(express.static(path.resolve(__dirname, '../../client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

module.exports = app;
