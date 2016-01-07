app.controller('NavbarCtrl', ['Auth', '$location', function(Auth, $location) {

	var self = this;
	self.authData = Auth.$getAuth();
	console.log('self.authData', self.authData);

	self.logout = function() {
		console.log('logging out');
		Auth.$unauth();
		$location.path('/');
	};

}]);