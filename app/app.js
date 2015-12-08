var app = angular.module('BingeApp', ['ngRoute', 'firebase', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'partials/welcome.html',
			controller: 'WelcomeCtrl as welcomeCtrl'
		}).
		when('/search', {
			templateUrl: 'partials/show-search.html',
			controller: 'SearchCtrl as searchCtrl'
		}).
		when('/profile', {
			templateUrl: 'partials/profile.html',
			controller: 'ProfileCtrl as profileCtrl'
		}).
		otherwise('/');

}]);