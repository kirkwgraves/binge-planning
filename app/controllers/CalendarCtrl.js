app.controller('CalendarCtrl', ['Auth', '$firebaseArray', '$uibModal',
	function(Auth, $firebaseArray, $uibModal) {

	var self = this;
	var authData = Auth.$getAuth();
	var user = authData.uid;


	self.showsArray =[];
	self.events = [];
	
	// These two attrs required for calendar to render 
	self.calendarView = 'month';
	self.calendarDay = new Date();
	 

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
					plot: show.plot,
					cast: show.cast,
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

	function showModal(action, calendarEvent) {
	  var modalInstance = $uibModal.open({
	    templateUrl: 'partials/event-detail.html',
	    controller: 'ModalInstanceCtrl as modalInstanceCtrl',
	    resolve: {
	    	calEvent: function () {
	      	return calendarEvent;
	    	}
	    },
  	})
	}


	self.eventClicked = function(calendarEvent) {
		showModal('Click', calendarEvent);
		console.log('calendarEvent.title', calendarEvent.title);
	};

	self.eventDeleted = function(calendarEvent) {
		console.log('calendarEvent', calendarEvent);
		calendarEvent.startsAt = null;
		calendarEvent.endsAt = null;
	};


}]);