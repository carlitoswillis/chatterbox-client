var MessageView = {


  initialize: function() {
  },

  render: function (message) {
    // $('#chats').append('<div class="chat"> </div>');
    // $('.chat').append(`<div class="username" username=${message.username}> ${message.username} <div class='accompmessage' id=${message.objectId}> </div> </div>`).append(`<div class='actualmessages'> ${message.text} </div>`);
    // console.log(message.username + ': ' + message.text);
    if (!message.text.includes('script') && !message.username.includes('script')) {
      $('#chats').append(`<div class="username ${message.messageroomname}" "username=${message.username}> ${message.username} <div class='actualmessages'> ${message.text} </div> </div>`);
    }

  },



};