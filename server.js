const http = require('http');
const fs = require('fs');
const {URL} = require('url');
const path = require('path');

const PORT = process.env.PORT || 3010;
const HOST = process.env.HOST || 'localhost';

let server = http.createServer((req, res) => {
	let filePath, contentType;

	if (req.url === '/') {
		filePath = 'src/index.html';
		contentType = 'text/html';
	} else {
		filePath = 'src' + req.url;

		switch(path.extname(filePath)) {
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
			case '.ico':
				contentType = 'image/x-icon';
				break;
		}
	}

	fs.readFile(filePath, (error, data) => {
		res.writeHead(200, {'Content-Type': contentType});
		res.write(data);
		return res.end();
	});


});

server.listen(PORT, HOST);