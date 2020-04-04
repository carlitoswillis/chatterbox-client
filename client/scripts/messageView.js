var MessageView = {


  initialize: function() {
  },

  render: function (message) {
    // console.log(message.username + ': ' + message.text);
    $('#chats').append('<div class="chat"> </div>');
    $('.chat').append(`<div class="username" username=${message.username}> ${message.username} <div class='accompmessage' id=${message.objectId}> </div> </div>`).append(`<div class='actualmessages'> ${message.text} </div>`);
  },



};