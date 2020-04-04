var RoomsView = {

  $button: $('#rooms button'),

  $select: $('#rooms select'),

  initialize: function() {

    $("<input class='roomInput' type='text' />").appendTo('#rooms');
    // Room.initialize();
    // this.$select.append();
    // $('#mySelectBox option:selected');

    this.$button.on('click', function () {
      if ($('roomdropdown newroom:selected')) {
        // alert('hey');
        // var newRoomName = window.location.search.substr(10);
        // var val =

        RoomsView.$select.append($('<option/>', {
          value: $('.roomInput').val(),
          text: $('.roomInput').val()
        }));
      }
    });
  },

  render: function() {

  },

  renderRoom: function () {

  }

};
