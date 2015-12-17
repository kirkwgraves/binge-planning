app.controller('CalendarCtrl', ['Auth', '$firebaseArray', '$uibModal',  
	function(Auth, $firebaseArray, $uibModal) {

	var self = this;
	var authData = Auth.$getAuth();
	var user = authData.uid;

	self.showsArray =[];
	self.events = [];
	self.selectedEvent = {};
	self.calendarView = 'month';
	self.calendarDay = new Date();
	self.month = [];
	self.monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	for (var i = 0; i < self.monthsArray.length; i++) {
		self.month[i] = self.monthsArray[i];
	}
	
	self.currentMonth = self.month[self.calendarDay.getMonth()];

	ref = new Firebase('https://binge-planning.firebaseio.com/users/' + user + '/shows/');
	// Use snapshots to manipulate shows in user's array
	ref.on('value', function (snapshot) {
		self.shows = snapshot.val();
		console.log('self.shows', self.shows);

		for (var currentKey in self.shows) {
    	self.showsArray[self.showsArray.length] = self.shows[currentKey];
    }

    console.log('self.showsArray', self.showsArray);
		self.showsArray.forEach(function(show) {
			// console.log('show.startDate', show.startDate);
			if (show.startDate !== '' && show.endDate !== '') {
				self.events.push({
					title: show.title,
					type: 'info',
					startsAt: moment(show.startDate),
					endsAt: moment(show.endDate),
					editable: true,
					deletable: true,
					draggable: true,
					resizable: true,
					incrementsBadgeTotal: true
				});
			}
		});

	});

	self.eventClicked = function(calendarEvent) {
		console.log('calendarEvent.title', calendarEvent.title);
		self.selectedEvent = calendarEvent;
		console.log('self.selectedEvent', self.selectedEvent);
		$uibModal.open({
			templateUrl: 'partials/event-detail.html',
			controller: 'CalendarCtrl as calendarCtrl'
		});
	};

	
	

	
	

}]);