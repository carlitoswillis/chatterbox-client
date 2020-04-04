var RoomsView = {

  $button: $('#rooms button'),

  $select: $('#rooms select'),

  initialize: function() {

    $("<input class='roomInput' type='text' />").appendTo('#rooms');
    this.$select.addClass('roomdropdown');
    // Room.initialize();
    // this.$select.append();
    // $('#mySelectBox option:selected');
    this.$button.on('click', function () {
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
  },

  render: function() {
    // wipe screen ?
  },

  renderRoom: function () {
    // show messages from specific chat room only
  }

};
