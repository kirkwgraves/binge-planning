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

	self.removeShow = function(show) {
		self.showsArray.$loaded()
		.then(function(tvData) {
			self.showsArray = tvData;
			console.log('self.showsArray', self.showsArray);
			self.showToDelete = self.showsArray.$getRecord(show.$id);
			console.log('self.showToDelete', self.showToDelete);
			self.showsArray.$remove(self.showToDelete)
			.then(function(ref) {
				ref.key() === self.showToDelete.$id
				console.log('ref', ref);
			})
	}) 
	.catch(function(error) {
		console.log('Failure due to: ', error);
	}); // End callback func

	// self.selectedShow = {};
	console.log('Hello from removeShow');

	};
	

}]); // End ProfileCtrl