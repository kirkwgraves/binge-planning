app.controller('ProfileCtrl', ['$routeParams', '$firebaseArray', 'userFactory', '$http', 
	function($routeParams, $firebaseArray, userFactory, $http) {

	var self = this;
	
	userFactory.getUserShows().$loaded()
	.then(function(tvData) {
		self.showsArray = tvData;
		console.log('self.showsArray', self.showsArray);
	})
	.catch(function(error) {
		console.log('Failure due to: ', error);
	}); // End callback func




}]); // End ProfileCtrl