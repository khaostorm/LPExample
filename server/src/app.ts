import { server } from './server';
import { ServerPorts } from 'common';

const port: number = ServerPorts.apiserver;

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
