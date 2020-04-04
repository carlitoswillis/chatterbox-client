var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {

    $('#chats').html('');



    // use ajax to wait for messages to download ? and save

    $( document ).ready(function () {

      for (var i = 0; i < Messages.library.length; i++) {
        MessageView.render(Messages.library[i]);
      }

    });

  },

  renderMessage: function () {

  },


  send: function () {

  }

};