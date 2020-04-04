var Friends = {

  initialize: function() {

    $('.username').on('click', function () {
      if ($('roomdropdown newroom:selected')) {
        // alert('hey');
        // var newRoomName = window.location.search.substr(10);
        // var val =
        // post new room to API instead
        RoomsView.$select.append($('<option/>', {
          value: $('.roomInput').val(),
          text: $('.roomInput').val()
        }));
      }
    });

  }

  // var showUsrTweets = function(Usr){
  //   $('#twtMn').children().css('display', 'none');
  //   $('#twtMn').children('.' + Usr).css('display','block');
  //   }
  //   $(document).on('click', 'a.user', function () {
  //     currentUsr = $(this).parent().attr('class')
  //     showUsrTweets($(this).parent().attr('class'))
  //  });

};