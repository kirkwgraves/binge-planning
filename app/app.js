var app = angular.module('BingeApp', ['ngRoute', 'firebase', 'mwl.calendar', 'ui.bootstrap']);

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
		when('/profile/:tvShowId', {
			templateUrl: 'partials/show-detail.html',
			controller: 'ShowDetailCtrl as showDetailCtrl'
		}).
		when('/calendar', {
			templateUrl: 'partials/binge-calendar.html',
			controller: 'CalendarCtrl as calendarCtrl'
		}).
		otherwise('/');

}]);

app.run(function () {

	// Check Firebase authentication `getAuth()`

	// If user is currently logged in, load appropriate view `$location`

	// If user is not logged in, execute load login screen with `$location`

});