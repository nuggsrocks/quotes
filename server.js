const http = require('http');
const fs = require('fs');
const {URL} = require('url');
const path = require('path');

const PORT = process.env.PORT || 3010;
const HOST = process.env.HOST || 'localhost';

let server = http.createServer((req, res) => {
	let requestPath = req.url.replace('/quotes', '');
	let filePath, contentType;

	if (requestPath === '/') {
		filePath = 'src/index.html';
		contentType = 'text/html';
	} else {
		filePath = 'src' + requestPath;

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
		if (error) console.log(error);
		res.writeHead(200, {'Content-Type': contentType});
		res.write(data);
		return res.end();
	});


});

server.listen(PORT, HOST);
