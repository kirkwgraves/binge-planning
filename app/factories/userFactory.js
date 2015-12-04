app.factory('userFactory', ['$firebaseArray',
	function($firebaseArray) {

		var showsArray = [];
		var loggedInUser, ref;

		return {
			// Function to set user for duration of login
			setUser: function(authData) {
				loggedInUser = authData;
				console.log('loggedInUser', loggedInUser);
				ref = new Firebase('https://binge-planning.firebaseio.com/users' + loggedInUser.uid + '/shows/');
				showsArray = $firebaseArray(ref);
				console.log('showsArray', showsArray);
				return showsArray;
			}


		};

	}
]);