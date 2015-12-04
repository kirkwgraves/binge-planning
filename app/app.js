var app = angular.module('BingeApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'partials/login.html',
			controller: 'AuthCtrl as authCtrl'
		}).
		otherwise('/');

}]);