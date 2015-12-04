app.factory('Auth', ['$firebaseAuth',
	function($firebaseAuth) {
		var ref = new Firebase('https://binge-planning.firebaseio.com/');
		return $firebaseAuth(ref);
	}
]);