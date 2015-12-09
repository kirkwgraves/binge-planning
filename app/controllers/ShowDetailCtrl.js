app.controller('ShowDetailCtrl', ['$routeParams', '$firebaseArray', 'userFactory', '$http', 
	function($routeParams, $firebaseArray, userFactory, $http) {

	var self = this;
	self.selectedShow = {};
	self.tvShowId = $routeParams.tvShowId;
	console.log('self.tvShowId', self.tvShowId);

	userFactory.getUserShows().$loaded()
	.then(function(tvData) {
		self.showsArray = tvData;
		console.log('self.showsArray', self.showsArray);
		self.selectedShow = self.showsArray.$getRecord(self.tvShowId);
		console.log('self.selectedShow', self.selectedShow);
	}) 
	.catch(function(error) {
		console.log('Failure due to: ', error);
	}); // End callback func




}]); // End ShowDetailCtrl