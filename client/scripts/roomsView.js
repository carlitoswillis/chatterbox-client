var RoomsView = {

  $button: $('#rooms button'),

  $select: $('#rooms select'),

  initialize: function() {

    $('<input class=\'roomInput\' type=\'text\' />').appendTo('#rooms');
    this.$select.addClass('roomdropdown');

    $( document ).ready(this.render);
    this.$select.on()
  },

  render: function(room) {
    $(`#chats`).childre().css('display', 'none');

    console.log('this does get activated');

    // $('.chat').html('');
    // .append('<div>hello this is resetting stuff </div>');

    $(`.${room}`).css('display', 'block');

  },

  renderRoom: function () {
    // show messages from specific chat room only
  }

};

// var showRoom = function(room){
//
//   $(document).on('click', 'a.user', function () {
//     currentUsr = $(this).parent().attr('class')
//     showUsrTweets($(this).parent().attr('class'))
//  });
