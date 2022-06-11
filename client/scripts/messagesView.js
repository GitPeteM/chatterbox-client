// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // for elements in messages for unique room
      // call renderMessage(element);

    let roomname = Rooms.selected;
    let messages = Messages.getMessages();

    // iterate over the selected messages based on current room.
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['roomname'] === roomname) {
        // send each message to renderMessage.
        MessagesView.renderMessage(message[i]);
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // call messageView, create our html template w/ username and message string.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};