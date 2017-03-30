'use strict';

var _ = require('lodash');

// combine options that should apply to all environments
// with options for the specific environment we're in
module.exports = _.extend(
	require('./env/all'),
	require('./env/' + process.env.NODE_ENV) || {}
);