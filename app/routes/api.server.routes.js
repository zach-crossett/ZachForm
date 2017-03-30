'use strict';

module.exports = function(app) {
	var api = require('../controllers/api.server.controller');

	app.route('/api/submit').post(api.submit);
};