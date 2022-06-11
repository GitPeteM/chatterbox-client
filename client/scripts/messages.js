// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  getMessages: function(roomname) {
    return Message._data;
  },
  setRoomMessages: function(roomname) {
    if (Messages._data[roomname] === undefined) {
      Messages._data[roomname] = [];
    }
  },
  pushRoomMessages: function(roomname, message) {
    if (Messages._data[roomname] === undefined) {
      Messages._data[roomname] = [];
    }
    Messages._data[roomname].push(message);
  }



};