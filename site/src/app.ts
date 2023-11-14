import * as path from 'path';
import { ServerPorts } from 'common';
import type { Express } from 'express';

const server: Express = (
	process.env.NODE_ENV === 'development'
		? require('./dev-server')
		: require('./server')
).server;
const port = ServerPorts.uiserver;
const HTML_FILE = path.join(__dirname, 'views', 'index.html');

server.get('/', (req, res) => {
	res.sendFile(HTML_FILE);
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
