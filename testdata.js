'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	db 	= mongoose(),
	MarketPrice = db.model('MarketPrice');

var data = [
{ ZIP_CODE_MARKET: 11123, PRICE_MARKET: 50.00, CALC_CHOICE: 1 },
{ ZIP_CODE_MARKET: 44456, PRICE_MARKET: 60.00, CALC_CHOICE: 2 },
{ ZIP_CODE_MARKET: 77789, PRICE_MARKET: 70.00, CALC_CHOICE: 1 },
];

MarketPrice.find().exec(function(err, results) {
	// If there is no data already, add some test data
	if(!results.length) {

		console.log('Adding some test market data');

		MarketPrice.create(data, function(err) {
			if(err) {
				console.log(err);
			}
			console.log('Done');
			process.exit();
		});
	}
	else {
		console.log('Data already exists, skipping');
		process.exit();
	}
});