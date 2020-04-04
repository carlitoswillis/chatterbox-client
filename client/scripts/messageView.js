var MessageView = {

  render: function (message) {
    // console.log(message.username + ': ' + message.text);
    $('body').append('<div class="chat"> </div>');
    $('.chat').append(`<div class="username" id=${message.objectId}> ${message.username}</div>`);
    $(`#${message.objectId}`).append(`<div class='message'> ${message.text}</div>`);
  }
};