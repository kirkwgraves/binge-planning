app.factory('userFactory', ['$firebaseArray',
	function($firebaseArray) {

		var loggedInUser, ref;
		self.showsArray;

		return {
			// Function to set user for duration of login
			setUser: function(authData) {
				loggedInUser = authData;
				console.log('loggedInUser = ', loggedInUser);		
			},

			getUser: function() {
				return loggedInUser;
			},

			getUserShows: function() {
				var ref = new Firebase('https://binge-planning.firebaseio.com/users/' + loggedInUser.uid + '/shows/');
				self.showsArray = $firebaseArray(ref);
				console.log('self.showsArray', self.showsArray);
				return self.showsArray;
			},

			addShow: function(newTvShow) {
				var ref = new Firebase('https://binge-planning.firebaseio.com/users/' + loggedInUser.uid + '/shows/');
				self.showsArray = $firebaseArray(ref);
				self.showsArray.$add(newTvShow)
				.then(function(ref) {
					var id = ref.key();
					console.log('Added show with id: ' + id);
					newTvShow.id = id;
					console.log('newTvShow', newTvShow);
				});
			}


		};

	}
]);