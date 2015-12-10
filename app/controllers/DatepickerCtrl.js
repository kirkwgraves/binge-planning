app.controller('DatepickerCtrl', function () {
  
  var self = this;

  self.today = function() {
    self.dt = new Date();
  };

  self.today();

  self.clear = function () {
    self.dt = null;
  };

  self.toggleMin = function() {
    self.minDate = self.minDate ? null : new Date();
  };
  self.toggleMin();
  self.maxDate = new Date(2020, 12, 31);

  self.open = function($event) {
    self.status.opened = true;
  };

  self.setDate = function(year, month, day) {
    self.dt = new Date(year, month, day);
  };

  self.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  self.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  self.format = self.formats[0];

  self.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  self.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  self.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<self.events.length;i++){
        var currentDay = new Date(self.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return self.events[i].status;
        }
      }
    }

    return '';
  };
});