(function() {

	'use strict';

	angular
		.module('core')
		.factory('Storage', Storage);

	Storage.$inject = [];

	function Storage() {

		var data = {}

		var factory = {
			setZip: setZip,
			setUserPrice: setUserPrice,
			setMarketPrice: setMarketPrice,

			getZip: getZip,
			getUserPrice: getUserPrice,
			getMarketPrice: getMarketPrice,
		};

		return factory;

		////////////

		function setZip(zip) {
			data.zip = zip;
		}

		function setUserPrice(price) {
			data.userPrice = price;
		}

		function setMarketPrice(price) {
			data.marketPrice = price;
		}

		function getZip() {
			return data.zip;
		}

		function getUserPrice() {
			return data.userPrice;
		}

		function getMarketPrice() {
			return data.marketPrice;
		}

	}
})();