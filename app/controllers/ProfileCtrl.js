app.controller('ProfileCtrl', ['$firebaseArray', 'userFactory', '$http', function($firebaseArray, userFactory, $http) {

	var self = this;
	self.showsArray = [];


	userFactory.getUserShows().$loaded()
	.then(function(tvData) {
		self.showsArray = tvData;
		console.log('self.showsArray', self.showsArray);
	})
	.catch(function(error) {
		console.log('Failure due to: ', error);
	});


	self.getPoster = function() {
		$http.get(' ')
	}



}]);