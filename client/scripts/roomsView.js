// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
    $('#rooms').append('<input type="text" id="inputRoom" name ="room">');
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // iterate over active
    $('#roomSelector').empty();
    $('#roomSelector').append('<option value="' + 'newRoom' + '">' + 'New Room...' + '</option>');
    for (let name in Rooms._data) {
      this.renderRoom(name);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    $('#roomSelector').append('<option value="' + roomname + '">' + roomname + '</option>');
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    // Rooms.markSelected( $('#roomSelector').val())

    let currentSelected = $('#roomSelector').val();
    // call renderRoom on the newly selected room
    // console.log(currentSelected);
    // clear the messages loaded on the screen
    if ( currentSelected === 'newRoom') {
      // $('#rooms').append('<input type="text" id="inputRoom" name ="room">');
      $('#inputRoom').show();
    } else {
      $('#inputRoom').hide();
    }

    MessagesView.render();

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button

    let newRoomName = $('#inputRoom').val();
    // write a method in Rooms.js that allows you to add a new room to the _data object
    Rooms.add(newRoomName);
    $('#roomSelector').empty();
    RoomsView.render();
  }
};