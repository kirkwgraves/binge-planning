app.factory('userFactory', ['$firebaseArray',
	function($firebaseArray) {

		var showsArray = [];
		var loggedInUser, ref;

		return {
			// Function to set user for duration of login
			setUser: function(authData) {
				loggedInUser = authData;
				console.log('loggedInUser = ', loggedInUser);
				ref = new Firebase('https://binge-planning.firebaseio.com/users/' + loggedInUser.uid + '/shows/');
				showsArray = $firebaseArray(ref);
				console.log('showsArray', showsArray);
				return showsArray;
			},

			getUserShows: function() {
				console.log('showsArray', showsArray);
				return showsArray;
			},

			getShow: function(){
				
			},

			addShow: function(newTvShow) {
				console.log('showsArray', showsArray);
				showsArray.$add(newTvShow)
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