(function() {

	'use strict';

	angular
		.module('core')
		.controller('Form', FormController);

	FormController.$inject = ['Api', 'Storage', '$location'];

	function FormController(Api, Storage, $location) {

		var vm = this;

		vm.submit = submit;

		function submit() {

			// TODO: sanitization/validation

			var data = {
				info_1: vm.info_1,
				info_2: vm.info_2,
				info_3: vm.info_3,
				company: vm.company,
				zip_code: vm.zip_code,
				price: vm.price,
			};

			// Store for display on the results page
			Storage.setZip(vm.zip_code);
			Storage.setUserPrice(vm.price.toFixed(2));

			// Send the data to the backend
			Api.submit(data).then(_handleResult, _handleError);
		}

		function _handleResult(response) {
			// clear validation error msg
			delete vm.zip_code_msg;
			// Store the adjusted price for the results page
			Storage.setMarketPrice(Math.round(response.data.price).toFixed(2));
			// Go to the results route
			$location.path('/results');
		}

		// TODO: error handling for 500
		function _handleError(response) {

			// Check for missing zip code
			if(response.status === 404) {
				vm.zip_code_msg = response.data.msg;
			}
		}
	}

})();