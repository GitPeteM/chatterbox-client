// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  // create an object that holds all of the localUser's friend's names.
  // { friend1 : friend1, friend2 : friend2}
  _data: new Set(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  // add friend
  addFriend: function(name) {
    Friends._data.add(name);
  },
  // remove friend
  removeFriend: function(name) {
    Friends._data.delete(name);
  },
  checkFriendStatus: function(name) {
    return Friends._data.has(name);
  }


};