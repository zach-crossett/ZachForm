'use strict';

var config = require('./config'),
	mongoose = require('mongoose');

// TODO: handle database connection failure

module.exports = function() {

	// mpromise (mongoose's built-in promise library) is depracated
	// so we plug in a different one here
	mongoose.Promise = require('bluebird');

	// pass in database connection info from config
	var db = mongoose.connect(config.db);

	// Models
	require('../app/models/marketPrice.server.model');
	require('../app/models/collectedPrice.server.model');

	return db;
};