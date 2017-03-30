// defaults environment to development and port to 5000
// these can be changed at runtime by setting the
// appropriate enviornment variable beforehand
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 5000;

// bootstrap the express application
var express = require('./config/express'),
	mongoose = require('./config/mongoose'),
	db = mongoose(),
	app = express(db);

app.listen(process.env.PORT);

module.exports = app;

console.log('Server running at http://localhost:'+process.env.PORT+'/');