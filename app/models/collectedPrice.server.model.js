'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CollectedPriceSchema = new Schema({
	INFO_1: Number,
	INFO_2: Number,
	INFO_3: Number,
	COMPANY: String,
	ZIP_CODE: Number,
	PRICE: Number,
});

mongoose.model('CollectedPrice', CollectedPriceSchema);