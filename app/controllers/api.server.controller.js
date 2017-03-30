'use strict';

var mongoose = require('mongoose'),
	MarketPrice = mongoose.model('MarketPrice'),
	CollectedPrice = mongoose.model('CollectedPrice');

// These will be used to calculate the adjusted price.
// Numbers are straight from the attached spreadsheet
var choice_1 = {
	info_1: {
		1: 1,
		2: 1.85,
		3: 2.7,
	},
	info_2: {
		2: 1,
		4: 1.35,
	},
	info_3: {
		1: 1,
		2: 1.95,
		3: 2.75,
		4: 3.55,
		5: 4.35,
	},
};

var choice_2 = {
	info_1: {
		1: 1,
		2: 1.7,
		3: 2.5,
	},
	info_2: {
		2: 1,
		4: 1.25,
	},
	info_3: {
		1: 1,
		2: 1.9,
		3: 2.7,
		4: 3.5,
		5: 4.3,
	},
};

exports.submit = function(req, res) {
	
	// TODO: sanitization/validation
	// TODO: should data with an unknown zip code be inserted?

	var newCollectedPrice = new CollectedPrice({
		INFO_1: req.body.info_1,
		INFO_2: req.body.info_2,
		INFO_3: req.body.info_3,
		COMPANY: req.body.company,
		ZIP_CODE: req.body.zip_code,
		PRICE: req.body.price,
	});

	// insert the submitted data
	newCollectedPrice.save(function(err) {
		// some database error has occurred
		if(err) {
			return res.status(500).send({
				msg: 'Error saving document',
			});
		}
	});

	var query = {
		ZIP_CODE_MARKET: req.body.zip_code,
	};

	// grab the market pricing for this zip code
	MarketPrice.findOne(query).exec(function(err, result) {

		// some database error has occurred
		if(err) {
			return res.status(500).send({
				msg: 'Error looking up market pricing.',
			});
		}

		// this zip code doesn't exist
		if(!result) {
			return res.status(404).send({
				msg: 'No market pricing data for this zip code.',
			});
		}

		// figure out which set of multipliers to use
		// based on the CALC_CHOICE of the market data
		var lookup;
		switch(result.CALC_CHOICE) {
			case 1:
				lookup = choice_1;
				break;
			case 2:
				lookup = choice_2;
				break;
		}

		// adjust the base price by 3 multipliers
		// INFO_1, INFO_2, and INFO_3 from the
		// lookup object
		var adjusted = result.PRICE_MARKET;
		adjusted *= lookup.info_1[req.body.info_1];
		adjusted *= lookup.info_2[req.body.info_2];
		adjusted *= lookup.info_3[req.body.info_3];

		// send the adjusted price back
		res.status(200).send({
			'price': adjusted,
		});

	});
};
