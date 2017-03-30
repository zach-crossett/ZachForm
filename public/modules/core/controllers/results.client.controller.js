(function() {

	'use strict';
	
	angular
		.module('core')
		.controller('Results', ResultsController);

	ResultsController.$inject = ['Storage'];

	function ResultsController(Storage) {
		
		var vm = this;		

		activate();

		////////////

		function activate() {
			// Grab the data to display
			vm.zip = Storage.getZip();
			vm.user = Storage.getUserPrice();
			vm.market = Storage.getMarketPrice();

			// TODO: how to handle negative values?
			vm.difference = (vm.user-vm.market).toFixed(2);
		}
	}

})();