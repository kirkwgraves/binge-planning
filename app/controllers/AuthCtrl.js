app.controller('AuthCtrl', ['Auth', '$firebaseAuth', '$location', 
	function($firebaseAuth, $location) {

	var self = this;
	var userId;

	self.register = function() {
		Auth.$createUser({
			email: self.email,
			password: self.password
		}).then(function(userData) {
			console.log('User created with uid: ', userData.uid);
			$location.path('/');
		}).catch(function(error) {
			self.error = error;
			console.log('Error: ', error);
		});
	};

	self.login = function() {
		Auth.$authWithPassword({
			email: self.email,
			password: self.password
		}).then(function(authData) {
			console.log('Logged in as: ', authData.uid);
			userFactory.setUser(authData);
			userId = authData.password.email;
			console.log('userId', userId);
			$location.path('/profile');
		}).catch(function(error) {
			self.error = error;
			console.log('Authentication failed: ', error);
		});
	};

	self.logout = function() {
		console.log('logging out');
		Auth.$unauth();
		$location.path('/');
	};

	self.removeUser = function() {
		Auth.$removeUser({
			email: self.email,
			password: self.password
		}).then(function() {
			self.message = 'User removed!';
			console.log('self.message', self.message);
		}).catch(function(error) {
			self.error = error;
			console.log('User not removed due to: ', error);
		});
	};


}]); // End AuthCtrl