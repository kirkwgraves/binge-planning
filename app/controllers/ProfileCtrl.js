app.controller('ProfileCtrl', ['Auth', '$routeParams', '$firebaseArray', 'userFactory', '$http', 
	function(Auth, $routeParams, $firebaseArray, userFactory, $http) {

	var self = this;
	var authData = Auth.$getAuth();
	var user = authData.uid;
	console.log('user', user);


	ref = new Firebase('https://binge-planning.firebaseio.com/users/' + user + '/shows/');
	self.showsArray = $firebaseArray(ref);

	console.log('self.showsArray', self.showsArray);

	self.removeShow = function() {
		
	}
	

}]); // End ProfileCtrl