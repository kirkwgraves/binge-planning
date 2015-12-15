app.controller('ShowDetailCtrl', ['$routeParams', 'Auth', '$firebaseArray', 'userFactory', '$http', 
	function($routeParams, Auth, $firebaseArray, userFactory, $http) {

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
	console.log('self.selectedShow.startDate', self.selectedShow.startDate);

	// self.selectedShow.startDate = self.selectedShow.startDate.toJSON();
	// self.selectedShow.endDate = self.selectedShow.endDate.toJSON();
	self.showsArray.$save(self.selectedShow);
};



}]); // End ShowDetailCtrl