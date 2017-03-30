'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MarketPriceSchema = new Schema({
	ZIP_CODE_MARKET: Number,
	PRICE_MARKET: Number,
	CALC_CHOICE: Number,
});

mongoose.model('MarketPrice', MarketPriceSchema);