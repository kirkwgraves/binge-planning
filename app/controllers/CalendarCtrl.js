app.controller('CalendarCtrl', ['Auth', '$firebaseArray', 
	function(Auth, $firebaseArray) {

	var self = this;
	var authData = Auth.$getAuth();
	var user = authData.uid;

	self.events = [];
	self.calendarView = 'month';
	self.calendarDay = new Date();

	ref = new Firebase('https://binge-planning.firebaseio.com/users/' + user + '/shows/');
	// Use snapshots
	ref.on('value', function(snapshot) {
		var startDates = snapshot.val();

		startDates.forEach(function (show) {

			self.events.push({

				startsAt: moment(show.startDate),
				endsAt: moment(show.endDate),
				editable: false,
				deletable: true,
				draggable: true,
				resizable; true,
				incrementsBadgeTotal: true,
			});
		});

	});



	
	

	
	

}]);