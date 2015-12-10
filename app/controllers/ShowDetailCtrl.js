app.controller('ShowDetailCtrl', ['$routeParams', '$firebaseArray', 'userFactory', '$http', 
	function($routeParams, $firebaseArray, userFactory, $http) {

	var self = this;
	self.showsArray;
	self.selectedShow = {};
	self.tvShowId = $routeParams.tvShowId;
	console.log('self.tvShowId', self.tvShowId);


	var theUser = userFactory.getUser();
	var ref = new Firebase('https://binge-planning.firebaseio.com/users/' + theUser.uid + '/shows/');
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