(function() {

	'use strict';

	angular
		.module('core')
		.factory('Api', Api);

	Api.$inject = ['$http'];

	function Api($http) {

		var factory = {
			submit: submit,
		};

		return factory;

		////////////

		function submit(payload) {
			return $http.post('/api/submit', payload);
		}
	}
})();