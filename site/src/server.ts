import * as express from 'express';
import * as path from 'path';
const staticPath = path.join(__dirname, '../views');
const server = express();
server.use(express.static(staticPath));

export { server };
