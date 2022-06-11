// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},
  //find which room is currently selected
  selected: 'lobby',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  getRoomMessages: function(roomname) {
    return _data[roomname];
  },

  markSelected: function(roomname) {
    Rooms.selected = roomname;
  },

  add: function(newRoomName) {
    Rooms._data[newRoomName] = newRoomName;
  }

};

// $.parseJSON(successCB);

// Rooms._data[room1].messages;
// _data = {
//     roomName : {
//             messages: [message1, message2, message3]
//             isSelected: true,
//     room2: [message1, message2, message3],
//     room3: [message1, message2, message3];
// }


