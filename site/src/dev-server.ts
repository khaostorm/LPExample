import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';

const config = require('../webpack.dev');
const compiler = webpack(config);
const server = express();

server.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	})
);

export { server };
