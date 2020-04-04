var Rooms = {

  initialize: function () {

    var roomSet = new Set();

    $( document ).ready(App.fetch(function (data) {
      data = data.results;
      for (var element of data) {
        roomSet.add(element.roomname);
      }
      for (var element of roomSet) {
        RoomsView.$select.append($('<option/>', {
          value: element,
          text: element,
          id: element
        }));
      }

      RoomsView.$select.append($('<option/>', {
        value: 'new room',
        text: 'new room',
        className: 'newRoom'
      })).addClass('roomdropdown');


    }));
  }

};
