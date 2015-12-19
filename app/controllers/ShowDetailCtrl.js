app.controller('ShowDetailCtrl', ['$routeParams', 'Auth', '$firebaseArray', 'userFactory', '$http', '$location', 
	function($routeParams, Auth, $firebaseArray, userFactory, $http, $location) {

	var ref;
	var self = this;
	var authData = Auth.$getAuth();
	var user = authData.uid;
	console.log('user', user);

	self.showsArray;
	self.selectedShow = {};
	self.tvShowId = $routeParams.tvShowId;
	console.log('self.tvShowId', self.tvShowId);


	ref = new Firebase('https://binge-planning.firebaseio.com/users/' + user + '/shows/');
	self.showsArray = $firebaseArray(ref);

	self.showsArray.$loaded()
	.then(function(tvData) {
		self.showsArray = tvData;
		console.log('self.showsArray', self.showsArray);
		self.selectedShow = self.showsArray.$getRecord(self.tvShowId);
		console.log('self.selectedShow', self.selectedShow);
	}) 
	.catch(function(error) {
		console.log('Failure due to: ', error);
	}); // End callback func

	
self.addBingeDates = function() {

	// Format datepicker Date object into yyyy-MM-dd
	self.selectedShow.startDate = (self.selectedShow.startDate.getYear() + 1900) + '-' + (self.selectedShow.startDate.getMonth() + 1) + '-' + self.selectedShow.startDate.getDate();  
	console.log('self.selectedShow.startDate', self.selectedShow.startDate);
	
	self.selectedShow.endDate = (self.selectedShow.endDate.getYear() + 1900) + '-' + (self.selectedShow.endDate.getMonth() + 1) + '-' + self.selectedShow.endDate.getDate();  
	console.log('self.selectedShow.endDate', self.selectedShow.endDate);

	
	self.showsArray.$save(self.selectedShow);
	$location.path('/calendar');
};



}]); // End ShowDetailCtrl