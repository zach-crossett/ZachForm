'use strict';

var http			= require('http'),
	express 		= require('express'),
	bodyParser 		= require('body-parser'),
	pug				= require('pug'),
	config 			= require('./config');

module.exports = function() {
	var app = express();
	var server = http.createServer(app);

	// Middleware
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// Templates
	app.engine('server.view.html', pug.renderFile);
	app.set('view engine', 'server.view.html');
	app.set('views', './app/views');

	// Routes
	require('../app/routes/core.server.routes.js')(app);
	require('../app/routes/api.server.routes.js')(app);

	// Static
	app.use(express.static('./public', config.static));
	
	return server;
};