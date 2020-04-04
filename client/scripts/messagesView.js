var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {



    $( document ).ready(function () {
      console.log('line 10 msgs view ', Array.isArray(Messages.library));
      console.log('hola from line 12 msgs view ', Messages.library.length);
      for (var i = 0; i < Messages.library.length; i++) {
        // console.log('here messagesView line 14', message);
        // console.log();
        MessageView.render(Messages.library[i]);
      }

    });

  },

  render: function() {
  }

};