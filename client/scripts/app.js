var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {

    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    Messages.initialize();
    MessagesView.initialize();
    Rooms.initialize();



    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);



  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      callback(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
