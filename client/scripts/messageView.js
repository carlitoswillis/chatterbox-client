var MessageView = {

  render: function (message) {
    // console.log(message.username + ': ' + message.text);
    $('body').append('<div class="chat"> </div>');
    $('.chat').append(`<div class="username" > ${message.username} <div class='accompmessage' id=${message.objectId}> </div> </div>`).append(`<div class='actualmessages'> ${message.text} </div>`);
  }

};