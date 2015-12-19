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

app.config(function(calendarConfigProvider) {

	calendarConfigProvider.setDateFormatter('moment');
	calendarConfigProvider.setDateFormats({
  	hour: 'HH:mm' // this will configure times on the day view to display in 24 hour format rather than the default of 12 hour
  });
	calendarConfigProvider.setTitleFormats({
  	day: 'ddd D MMM' //this will configure the day view title to be shorter
  });
	calendarConfigProvider.setI18nStrings({
  	eventsLabel: 'Events', //This will set the events label on the day view
    timeLabel: 'Time' //This will set the time label on the time view
  });
  calendarConfigProvider.setDisplayAllMonthEvents(true);
  calendarConfigProvider.setDisplayEventEndTimes(false); //This will display event end times on the month and year views. Default false


});



app.run(function () {

	// Check Firebase authentication `getAuth()`

	// If user is currently logged in, load appropriate view `$location`

	// If user is not logged in, execute load login screen with `$location`

});