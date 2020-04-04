var Friends = {
  friendsList: new Set (),

  initialize: function() {

    $('.username').on('click', function () {
      if ($('roomdropdown newroom:selected')) {
        // alert('hey');
        // var newRoomName = window.location.search.substr(10);
        // var val =
        // post new room to API instead
        RoomsView.$select.append($('<option/>', {
          value: $('.roomInput').val(),
          text: $('.roomInput').val()
        }));
      }
    });

  }

};