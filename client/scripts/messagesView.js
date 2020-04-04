var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {

    $('#chats').html('');



    // use ajax to wait for messages to download ? and save

    $( document ).ready(function () {
      console.log('line 10 msgs view ', Array.isArray(Messages.library));
      console.log('hola from line 12 msgs view ', Messages.library.length);
      for (var i = 0; i < Messages.library.length; i++) {
        MessageView.render(Messages.library[i]);
      }
    });
  },

  renderMessage: function () {

  }

};