const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const favicon = require('serve-favicon');

const PORT = process.env.PORT || 3010;
const HOST = process.env.HOST || '127.0.0.1';

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(favicon(path.join(__dirname, 'src', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

if (process.env.KEY && process.env.CERT) {
  try {
    const key = fs.readFileSync(process.env.KEY);
    const cert = fs.readFileSync(process.env.CERT);
    console.log('https credentials loaded');

    const server = https.createServer({key, cert}, app);


    server.listen(PORT, HOST, () => console.log('node server is running..'));
  } catch (error) {
    console.warn(error);
  }
}
