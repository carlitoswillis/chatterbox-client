var Rooms = {

  messageroomname: '',

  initialize: function () {

    var roomSet = new Set();

    $( document ).ready(App.fetch(function (data) {
      data = data.results;

      for (var element of data) {
        roomSet.add(element.roomname);
      }

      for (var element of roomSet) {
        RoomsView.$select.append($('<option/>', {
          value: element,
          text: element,
          id: element
        }));
      }



      // this.messageroomname = $('.roomdropdown option:selected').val();
      RoomsView.$button.on('click', function () {

        RoomsView.$select.append($('<option/>', {
          value: $('.roomInput').val(),
          text: $('.roomInput').val()
        }));

        this.messageroomname = $('.roomInput').val();
        // option[value="SEL1"]
        RoomsView.$select.val(`${this.messageroomname}`);
      });

    }));
  }

};
