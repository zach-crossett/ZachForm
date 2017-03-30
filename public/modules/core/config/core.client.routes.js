(function() {

	'use strict';

	angular
		.module('core')
		.config(Config);

	Config.$inject = ['$routeProvider'];

	function Config($routeProvider) {

		$routeProvider
			.when('/form', {
				templateUrl: './modules/core/views/form.client.view.html',
				controller: 'Form',
				controllerAs: 'vm'
			});

		$routeProvider
			.when('/results', {
				templateUrl: './modules/core/views/results.client.view.html',
				controller: 'Results',
				controllerAs: 'vm'
			});

		// default route
		$routeProvider
			.otherwise({redirectTo: '/form'});
	}
})();