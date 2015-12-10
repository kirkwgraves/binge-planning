app.controller('ProfileCtrl', ['$routeParams', '$firebaseArray', 'userFactory', '$http', 
	function($routeParams, $firebaseArray, userFactory, $http) {

	var self = this;

	var theUser = userFactory.getUser();
	console.log('theUser', theUser);
	var refUrl = 'https://binge-planning.firebaseio.com/users/' + theUser.uid + '/shows/';
	var ref = new Firebase(refUrl);
	self.showsArray = $firebaseArray(ref);

	self.showsArray.$loaded()
	.then(function(tvData) {
		self.showsArray = tvData;
		console.log('self.showsArray', self.showsArray);
	})
	.catch(function(error) {
		console.log('Failure due to: ', error);
	}); // End callback func




}]); // End ProfileCtrl