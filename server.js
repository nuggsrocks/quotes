const express = require('express');
const app = express();

const PORT = process.env.PORT || 3010;
const HOST = process.env.HOST || '127.0.0.1';

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, HOST, () => console.log('node server is running..'));