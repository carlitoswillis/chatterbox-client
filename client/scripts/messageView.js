var MessageView = {


  initialize: function() {
  },

  render: function (message) {
    // $('#chats').append('<div class="chat"> </div>');
    // $('.chat').append(`<div class="username" username=${message.username}> ${message.username} <div class='accompmessage' id=${message.objectId}> </div> </div>`).append(`<div class='actualmessages'> ${message.text} </div>`);
    // console.log(message.username + ': ' + message.text);





    messageText = App.cleanText(message.text);
    userName = App.cleanText(message.username);

      $('#chats').append(`<div class="username ${message.messageroomname}" "username=${userName}> ${userName} <div class='actualmessages'> ${messageText} </div> </div>`);


  },



};
