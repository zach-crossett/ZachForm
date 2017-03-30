(function() {

	'use strict';

	var dependencies = [
		'ngRoute',
		'core',
	];

	angular.module('crossett', dependencies);

	// Bootstrap angular
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['crossett']);
	});

})();