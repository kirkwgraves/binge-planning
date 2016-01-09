app.controller('ProfileCtrl', ['Auth', '$routeParams', '$firebaseArray', 'userFactory', '$http', 
	function(Auth, $routeParams, $firebaseArray, userFactory, $http) {

	var self = this;
	var authData = Auth.$getAuth();
	var user = authData.uid;
	console.log('user', user);


	ref = new Firebase('https://binge-planning.firebaseio.com/users/' + user + '/shows/');
	self.showsArray = $firebaseArray(ref);

	self.sortType = 'title';
	self.sortReverse = false;
	self.searchShows = '';

	self.tvShowId = $routeParams.tvShowId;

	console.log('self.showsArray', self.showsArray);

	self.removeShow = function() {
		self.showsArray.$loaded()
		.then(function(tvData) {
			self.showsArray = tvData;
			console.log('self.showsArray', self.showsArray);
			self.showToDelete = self.showsArray.$getRecord(self.tvShowId);
			console.log('self.showToDelete', self.showToDelete);
			self.selectedShow = {};
	}) 
	.catch(function(error) {
		console.log('Failure due to: ', error);
	}); // End callback func

	// self.selectedShow = {};
	console.log('Hello from removeShow');

	};
	

}]); // End ProfileCtrl